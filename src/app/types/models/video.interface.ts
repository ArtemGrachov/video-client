import { EStatus } from 'src/app/constants/status';

import { IMedia } from './media.interface';
import { IUser } from './user.interface';

export interface IVideo {
  id: number;
  name: string;
  description: string;
  author?: IUser;
  authorId: number;
  createdAt: string;
  isLiked: boolean;
  likesCount: number;
  media: IMedia;
  likeStatus?: EStatus;
  likeError?: any;
  deleteStatus?: EStatus;
  deleteError?: any;
}
