import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDataService } from 'src/app/modules/data/user-data/services/user-data.service';

import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewProfileComponent {
  constructor(private userDataService: UserDataService) {}

  public user$: Observable<IUser | null> = this.userDataService.data$;
}
