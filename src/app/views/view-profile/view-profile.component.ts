import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/modules/data/auth/services/auth.service';
import { UserDataService } from 'src/app/modules/data/user-data/services/user-data.service';

import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewProfileComponent {
  constructor(
    private authService: AuthService,
    private userDataService: UserDataService,
    private router: Router,
  ) {}

  public user$: Observable<IUser | null> = this.userDataService.data$;

  public logoutHandler(): void {
    this.authService.unauthorize();
    this.router.navigate(['/']);
  }
}
