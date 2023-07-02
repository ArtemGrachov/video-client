import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IMedia } from 'src/app/types/models/media.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {
  @Input()
  public user!: IUser;

  public get userName(): string {
    return this.user.name;
  }

  public get userAvatar(): IMedia {
    return this.user.avatar;
  }

  public get userAvatarSrc(): string | null {
    return this.userAvatar.url;
  }
}
