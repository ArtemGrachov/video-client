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
  perPage?: number | null;
  search?: string | null;
  subscriptions?: boolean | null;
  userIds?: Array<string | number>;
}

export interface IGetVideoResponse extends IVideo {}

export interface ILikeVideoResponse {
  count: number;
}

export interface ICreateVideoPayload {
  name: string;
  description: string;
  video: File;
}

export interface ICreateVideoResponse extends IVideo {}

export interface IUpdateVideoPayload {
  name?: string;
  description?: string;
  video?: File;
}

export interface IUpdateVideoResponse extends IVideo {}
