import { IUser } from '../models/user.interface';
import { IPagination } from '../other/pagination.interface';

export interface IGetUserResponse extends IUser {}

export interface IUpdateUserPayload {
  name?: string | null;
  email?: string | null;
  avatar?: File | null;
}

export interface IUpdateUserResponse extends IUser {}

export interface IGetUsersQuery {
  search?: string | null;
  page?: number | null;
}

export interface IGetUsersResponse {
  data: IUser[];
  pagination: IPagination;
}
