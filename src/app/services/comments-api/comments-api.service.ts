import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  IEditCommentPayload,
  IEditCommentResponse,
  ILikeCommentResponse,
} from 'src/app/types/api/comments-api.interface';
import { IApiGenericResponse } from 'src/app/types/api/common.interface';

import { environment } from 'src/environments/environment';

@Injectable()
export class CommentsApiService {
  constructor(private http: HttpClient) { }

  public likeComment(commentId: number): Observable<ILikeCommentResponse> {
    return this.http.post<ILikeCommentResponse>(`${environment.API_URL}/comments/${commentId}/like`, null);
  }

  public removeLikeComment(commentId: number): Observable<ILikeCommentResponse> {
    return this.http.delete<ILikeCommentResponse>(`${environment.API_URL}/comments/${commentId}/like`);
  }

  public updateComment(commentId: number, payload: IEditCommentPayload): Observable<IEditCommentResponse> {
    return this.http.patch<IEditCommentResponse>(`${environment.API_URL}/comments/${commentId}`, payload);
  }

  public deleteComment(commentId: number): Observable<IApiGenericResponse> {
    return this.http.delete<IApiGenericResponse>(`${environment.API_URL}/comments/${commentId}`);
  }
}
