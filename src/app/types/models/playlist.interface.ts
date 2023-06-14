import { IUser } from './user.interface';

export interface IPlaylist {
  id: number;
  name: string;
  description: string;
  authorId: number;
  author?: IUser;
  videoCount: number;
}
