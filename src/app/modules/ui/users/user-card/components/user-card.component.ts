import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IMedia } from 'src/app/types/models/media.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input()
  public user!: IUser;

  public get userName(): string {
    return this.user.name;
  }

  public get userAvatar(): IMedia | null {
    return this.user.avatar ?? null;
  }

  public get userAvatarSrc(): string | null {
    return this.userAvatar?.url ?? null;
  }

  public get isSubscription(): boolean {
    return Boolean(this.user.isSubscription);
  }

  public get userLink(): string[] {
    if (!this.user) {
      return [];
    }

    return ['/', 'users', this.user.id.toString()];
  }
}
