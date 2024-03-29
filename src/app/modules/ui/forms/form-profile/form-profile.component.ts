import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EStatus } from 'src/app/constants/status';
import { ImagesService } from 'src/app/modules/utils/images/services/images.service';

import { IUpdateUserPayload } from 'src/app/types/api/users-api.interface';
import { IUser } from 'src/app/types/models/user.interface';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormProfileComponent {
  @Input('user')
  public user?: IUser;

  @Input('submitStatus')
  public submitStatus: EStatus | null = EStatus.INIT;

  @Input('submitError')
  public submitError: any = null;

  @Output('formSubmit')
  private submitEmitter: EventEmitter<IUpdateUserPayload> = new EventEmitter()

  constructor(private imagesService: ImagesService) {}

  public get submitProcessing(): boolean {
    return this.submitStatus === EStatus.PROCESSING;
  }

  public get initialAvatarSrc(): string | null {
    return this.user?.avatar?.url ?? null;
  }

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    name: new FormControl(''),
    avatar: new FormControl(null),
  });

  public async submitHandler(): Promise<void> {
    if (this.form.invalid || this.submitProcessing) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = { ...this.form.value };
    const avatarScaled = await this.imagesService.compress(payload.avatar, 400, 400);
    payload.avatar = avatarScaled;

    this.submitEmitter.next(payload);
  }

  public ngOnInit(): void {
    if (this.user) {
      this.fillForm(this.user);
    }
  }

  public fillForm(user: IUser): void {
    this.form.setValue(
      {
        email: user.email,
        name: user.name,
        avatar: user.avatar?.url ?? null,
      },
      { emitEvent: false }
    );
  }
}
