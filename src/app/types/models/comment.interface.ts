import { IUser } from './user.interface';

export interface IComment {
  id: number;
  content: string;
  authorId: number;
  author?: IUser;
  createdAt: string;
}
