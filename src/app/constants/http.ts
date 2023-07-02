import { HttpContextToken } from '@angular/common/http';

export const TOKEN_REFRESH_REQUEST = new HttpContextToken<boolean>(() => false);
export const TOKEN_NO_AUTH = new HttpContextToken<boolean>(() => false);
