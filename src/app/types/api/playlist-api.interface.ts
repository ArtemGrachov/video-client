import { IPlaylist } from '../models/playlist.interface';
import { IUser } from '../models/user.interface';
import { IPagination } from '../other/pagination.interface';

export interface IGetPlaylistsQuery {
  userIds?: number[] | null;
  search?: string | null;
  page?: number | null;
}

export interface IGetPlaylistsResponse {
  data: IPlaylist[];
  users: IUser[];
  pagination: IPagination;
}

export interface IGetPlaylistResponse extends IPlaylist {}

export interface ICreatePlaylistPayload {
  name: string;
  description: string;
}

export interface ICreatePlaylistResponse extends IPlaylist {}
