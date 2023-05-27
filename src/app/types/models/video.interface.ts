import { IMedia } from './media.interface';

export interface IVideo {
  id: number;
  name: string;
  description: string;
  authorId: number;
  createdAt: string;
  isLiked: boolean;
  likesCount: number;
  media: IMedia;
}
