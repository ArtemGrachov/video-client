import { Injectable } from '@angular/core';
import { SimpleModalService } from '@looorent/ngx-simple-modal';

import { ViewPlaylistAddVideoComponent } from '../view-playlist-add-video.component';

import { IVideo } from 'src/app/types/models/video.interface';

@Injectable()
export class ViewPlaylistAddVideoModalService {
  constructor(private simpleModalService: SimpleModalService) { }

  public showModal(video: IVideo): void {
    this
      .simpleModalService
      .addModal(
        ViewPlaylistAddVideoComponent,
        { video },
        {
          closeOnEscape: true,
          closeOnClickOutside: true,
          animationDuration: 0
        }
      );
  }
}
