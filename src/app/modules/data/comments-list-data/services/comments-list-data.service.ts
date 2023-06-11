import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { EStatus } from 'src/app/constants/status';

import { VideoApiService } from '../../video-api/services/video-api.service';
import { CommentsApiService } from '../../comments-api/services/comments-api.service';

import { IGetCommentsQuery, IGetCommentsResponse, ILikeCommentResponse } from 'src/app/types/api/comments-api.interface';
import { IComment } from 'src/app/types/models/comment.interface';
import { IPagination } from 'src/app/types/other/pagination.interface';
import { IDictionary } from 'src/app/types/other/dictionary.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Injectable()
export class CommentsListDataService {
  private dataSbj$: BehaviorSubject<IGetCommentsResponse | null> = new BehaviorSubject(null as IGetCommentsResponse | null);

  private itemsSbj$: BehaviorSubject<IComment[]> = new BehaviorSubject([] as IComment[]);

  private paginationSbj$: BehaviorSubject<IPagination | null> = new BehaviorSubject(null as IPagination | null);

  public data$: Observable<IGetCommentsResponse | null> = this.dataSbj$.asObservable();

  public items$: Observable<IComment[]> = this.itemsSbj$.asObservable();

  public pagination$: Observable<IPagination | null> = this.paginationSbj$.asObservable();

  public get itemsSnapshot(): IComment[] {
    return this.itemsSbj$.value;
  }

  constructor(
    private videoApiService: VideoApiService,
    private commentsApiService: CommentsApiService,
  ) { }

  public getVideoComments(videoId: number, query?: IGetCommentsQuery): Observable<IGetCommentsResponse> {
    return this
      .videoApiService
      .getVideoComments(videoId, query)
      .pipe(tap(res => this.handleData(res, query)))
  }

  public unshiftItem(item: IComment): void {
    this.itemsSbj$.next([item, ...this.itemsSnapshot]);
  }

  public replaceItem(newItem: IComment): void {
    const newItems = this
      .itemsSnapshot
      .map((item) => {
        if (item.id !== newItem.id) {
          return item;
        }

        return newItem;
      });

    this.itemsSbj$.next(newItems);
  }

  public updateItem(id: number, changes: Partial<IComment>): void {
    const item = this.itemsSnapshot.find(comment => comment.id === id);

    if (!item) {
      return;
    }

    this.replaceItem({
      ...item,
      ...changes,
      id,
    });
  }

  private handleData(res: IGetCommentsResponse, query?: IGetCommentsQuery): void {
    const userMap: IDictionary<IUser> = res.users.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {} as IDictionary<IUser>);

    const pagination = this.paginationSbj$.getValue();
    let items = this.itemsSbj$.getValue();

    const newItems = res.data.map(video => ({ ...video, author: userMap[video.authorId] }))

    const page = query?.page ?? 1;
    let lowerPage = pagination?.lowerPage ?? page;
    let upperPage = pagination?.upperPage ?? page;

    if (page < lowerPage) {
      items.unshift(...newItems);
      lowerPage = page;
    } else if (page > upperPage) {
      items.push(...newItems);
      upperPage = page;
    } else {
      items = newItems;
      lowerPage = upperPage = page;
    }

    this.dataSbj$.next(res);
    this.itemsSbj$.next(items);
    this.paginationSbj$.next({
      ...res.pagination,
      lowerPage,
      upperPage
    });
  }

  public likeComment(commentId: number, like: boolean = true): Observable<ILikeCommentResponse> {
    const action = like
      ? this.commentsApiService.likeComment(commentId)
      : this.commentsApiService.removeLikeComment(commentId);

    this.updateItem(
      commentId,
      {
        likeStatus: EStatus.PROCESSING,
        likeError: null,
      },
    );

    return action
      .pipe(
        tap(
          {
            next: (res) => {
              this.updateItem(
                commentId,
                {
                  likeStatus: EStatus.SUCCESS,
                  likeError: null,
                  isLiked: like,
                },
              );
            },
            error: (error: any) => {
              this.updateItem(
                commentId,
                {
                  likeStatus: EStatus.ERROR,
                  likeError: error,
                },
              );
            }
          }
        )
      );
  }
}
