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
