import { IUser } from '../models/user.interface';
import { IVideo } from '../models/video.interface';
import { IPagination } from '../other/pagination.interface';

export interface IGetVideosResponse {
  data: IVideo[];
  users: IUser[];
  pagination: IPagination;
}
