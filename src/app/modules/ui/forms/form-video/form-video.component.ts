import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EStatus } from 'src/app/constants/status';

import { ICreateVideoPayload } from 'src/app/types/api/video-api.interface';
import { IVideo } from 'src/app/types/models/video.interface';

@Component({
  selector: 'app-form-video',
  templateUrl: './form-video.component.html',
  styleUrls: ['./form-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormVideoComponent {
  @Input()
  public video?: IVideo | null;

  @Input('submitStatus')
  public submitStatus: EStatus | null = EStatus.INIT;

  @Input('submitError')
  public submitError: any = null;

  @Output('formSubmit')
  private submitEmitter: EventEmitter<ICreateVideoPayload> = new EventEmitter()

  public get submitProcessing(): boolean {
    return this.submitStatus === EStatus.PROCESSING;
  }

  public get initialVideoSrc(): string | null {
    return this.video?.media.url ?? null;
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    video: new FormControl(null, [Validators.required]),
  });

  public submitHandler(): void {
    if (this.form.invalid || this.submitProcessing) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitEmitter.next(this.form.value);
  }

  public ngOnInit(): void {
    if (this.video) {
      this.fillForm(this.video);
    }
  }

  public fillForm(video: IVideo): void {
    this.form.setValue(
      {
        name: video.name,
        description: video.description,
        video: video.media.url,
      },
      { emitEvent: false }
    );
  }
}
