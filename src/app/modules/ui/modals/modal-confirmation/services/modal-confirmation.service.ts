import { Injectable } from '@angular/core';
import { SimpleModalService } from '@looorent/ngx-simple-modal';
import { Observable } from 'rxjs';

import { ModalConfirmationComponent } from '../modal-confirmation.component';

import { IModalConfirmationOptions } from '../modal-confirmation.interface';

@Injectable()
export class ModalConfirmationService {
  constructor(private simpleModalService: SimpleModalService) { }

  public showModal(options: IModalConfirmationOptions): Observable<boolean> {
    return this
      .simpleModalService
      .addModal(
        ModalConfirmationComponent,
        options,
        {
          closeOnEscape: false,
          closeOnClickOutside: false,
        }
      );
  }
}
