import { Injectable } from '@angular/core';
import { SimpleModalService } from '@looorent/ngx-simple-modal';
import { Observable } from 'rxjs';

import { ModalMenuComponent } from '../modal-menu.component';

@Injectable()
export class ModalMenuService {
  constructor(private simpleModalService: SimpleModalService) { }

  public showModal(): void {
    this
      .simpleModalService
      .addModal(
        ModalMenuComponent,
        null,
        {
          closeOnEscape: false,
          closeOnClickOutside: false,
          animationDuration: 0
        }
      );
  }
}
