import { Injectable } from '@angular/core';
import { SimpleModalService } from '@looorent/ngx-simple-modal';

import { ViewPlaylistAddVideoComponent } from '../view-playlist-add-video.component';

@Injectable()
export class ViewPlaylistAddVideoModalService {
  constructor(private simpleModalService: SimpleModalService) { }

  public showModal(): void {
    this
      .simpleModalService
      .addModal(
        ViewPlaylistAddVideoComponent,
        null,
        {
          closeOnEscape: true,
          closeOnClickOutside: true,
          animationDuration: 0
        }
      );
  }
}
