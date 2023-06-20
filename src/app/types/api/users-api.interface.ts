import { IUser } from '../models/user.interface';

export interface IGetUserResponse extends IUser {}

export interface IUpdateUserPayload {
  name?: string | null;
  email?: string | null;
  avatar?: File | null;
}

export interface IUpdateUserResponse extends IUser {}
