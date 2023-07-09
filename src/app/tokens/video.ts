import { InjectionToken } from '@angular/core';
import { UserDataService } from '../services/user-data/user-data.service';

export const VIDEO_AUTHOR_SERVICE = new InjectionToken<UserDataService>('VIDEO_AUTHOR_SERVICE');
