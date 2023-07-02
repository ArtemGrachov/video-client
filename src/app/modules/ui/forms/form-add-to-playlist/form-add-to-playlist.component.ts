import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EStatus } from 'src/app/constants/status';

import { IFormAddToPlaylistValue } from 'src/app/types/forms/form-add-to-playlist.interface';
import { IPlaylist } from 'src/app/types/models/playlist.interface';

@Component({
  selector: 'app-form-add-to-playlist',
  templateUrl: './form-add-to-playlist.component.html',
  styleUrls: ['./form-add-to-playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAddToPlaylistComponent {
  @Input('submitStatus')
  public submitStatus: EStatus | null = EStatus.INIT;

  @Input('submitError')
  public submitError: any = null;

  @Input('playlists')
  public playlists?: IPlaylist[]

  @Output('formSubmit')
  private submitEmitter: EventEmitter<IFormAddToPlaylistValue> = new EventEmitter()

  @Output('loadPlaylists')
  private loadPlaylistsEmitter: EventEmitter<void> = new EventEmitter()

  public get submitProcessing(): boolean {
    return this.submitStatus === EStatus.PROCESSING;
  }

  public get showSelection(): boolean {
    return (this.playlists?.length ?? 0) > 0;
  }

  public form: FormGroup = new FormGroup({
    playlist: new FormControl(null, [Validators.required]),
  });

  public submitHandler(): void {
    if (this.form.invalid || this.submitProcessing) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitEmitter.next(this.form.value);
  }

  public playlistsScrollHandler(): void {
    this.loadPlaylistsEmitter.emit();
  }
}
