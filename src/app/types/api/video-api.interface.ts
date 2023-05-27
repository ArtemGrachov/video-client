import { IUser } from '../models/user.interface';
import { IVideo } from '../models/video.interface';
import { IPagination } from '../other/pagination.interface';

export interface IGetVideosResponse {
  data: IVideo[];
  users: IUser[];
  pagination: IPagination;
}

export interface IGetVideosQuery {
  page?: number | null;
  search?: string | null;
  subscriptions?: boolean | null;
}

export interface IGetVideoResponse extends IVideo {}
