import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

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
    @Inject('MAIN_USER_SERVICE') private userDataService: UserDataService,
    private router: Router,
  ) {}

  public user$: Observable<IUser | null> = this.userDataService.data$;

  public get ownPageLink(): string[] {
    return [
      '/',
      'users',
      this.userDataService.dataSnapshot!.id.toString(),
    ];
  }

  public get editLink(): string[] {
    return ['/', 'profile'];
  }

  public get changePasswordLink(): string[] {
    return ['/', 'profile', 'change-password'];
  }

  public logoutHandler(): void {
    this.authService.unauthorize();
    this.router.navigate(['/']);
  }
}
