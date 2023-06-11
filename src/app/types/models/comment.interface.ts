import { EStatus } from 'src/app/constants/status';
import { IUser } from './user.interface';

export interface IComment {
  id: number;
  content: string;
  authorId: number;
  author?: IUser;
  createdAt: string;
  isLiked: boolean;
  likesCount: number;
  likeStatus?: EStatus;
  likeError?: any;
  editStatus?: EStatus;
  editError?: any;
}
