import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as dayjs from 'dayjs';

import { IComment } from 'src/app/types/models/comment.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentItemComponent {
  @Input()
  public comment!: IComment;

  public get content(): string {
    return this.comment.content;
  }

  public get createdAt(): string {
    return this.comment.createdAt;
  }

  public get createdAtFormatted(): string {
    return dayjs(this.createdAt).format('DD.MM.YYYY');
  }

  public get author(): IUser | null {
    return this.comment.author ?? null;
  }

  public get authorName(): string | null {
    return this.author?.name ?? null;
  }

  public get authorAvatarSrc(): string | null {
    return this.author?.avatar?.url ?? null;
  }
}
