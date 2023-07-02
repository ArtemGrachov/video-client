import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDataService } from 'src/app/modules/data/user-data/services/user-data.service';
import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewUserComponent {
  constructor(private userDataService: UserDataService) {}

  public userData$: Observable<IUser | null> = this.userDataService.data$;

  public get videosLink(): string[] {
    return [
      '/',
      'users',
      this.userDataService.dataSnapshot!.id.toString(),
    ];
  }

  public get playlistsLink(): string[] {
    return [
      '/',
      'users',
      this.userDataService.dataSnapshot!.id.toString(),
      'playlists'
    ];
  }
}
