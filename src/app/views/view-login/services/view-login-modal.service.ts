import { Injectable } from '@angular/core';
import { SimpleModalService } from '@looorent/ngx-simple-modal';
import { ViewLoginComponent } from '../view-login.component';

@Injectable()
export class ViewLoginModalService {
  constructor(private simpleModalService: SimpleModalService) { }

  public showModal(): void {
    this
      .simpleModalService
      .addModal(
        ViewLoginComponent,
        null,
        {
          closeOnEscape: true,
          closeOnClickOutside: true,
          animationDuration: 0
        }
      );
  }
}
