import { InjectionToken } from '@angular/core';
import { UserDataService } from '../services/user-data/user-data.service';

export const AUTH_USER_SERVICE = new InjectionToken<UserDataService>('AUTH_USER_SERVICE');
