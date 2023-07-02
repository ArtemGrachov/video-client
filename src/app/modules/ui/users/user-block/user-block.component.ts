import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserBlockComponent {
  @Input()
  public user!: IUser;

  public get userName(): string | null {
    return this.user?.name ?? null;
  }

  public get userAvatarSrc(): string | null {
    return this.user?.avatar?.url ?? null;
  }

  public get userLink(): string[] {
    if (!this.user) {
      return [];
    }

    return ['/', 'user', this.user.id.toString()];
  }
}
