import { EStatus } from 'src/app/constants/status';
import { IMedia } from './media.interface';

export interface IUser {
  id: number;
  name: string;
  avatar: IMedia;
  email?: string;
  isSubscription?: boolean;
  subscribeStatus?: EStatus;
  subscribeError?: any;
}
