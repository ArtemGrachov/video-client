import { IMedia } from './media.interface';

export interface IUser {
  id: number;
  name: string;
  avatar: IMedia;
  email?: string;
  isSubscription?: boolean;
}
