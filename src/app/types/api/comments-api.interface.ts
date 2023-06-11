import { IComment } from '../models/comment.interface';
import { IUser } from '../models/user.interface';
import { IPagination } from '../other/pagination.interface';

export interface IGetCommentsQuery {
  page?: number | null;
}

export interface IGetCommentsResponse {
  data: IComment[];
  users: IUser[];
  pagination: IPagination;
}

export interface ICreateCommentPayload {
  content: string;
}

export interface IEditCommentPayload {
  content: string;
}

export interface ICreateCommentResponse extends IComment {}

export interface IEditCommentResponse extends IComment {}

export interface ILikeCommentResponse {
  count: number;
}
