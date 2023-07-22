import { Injectable } from '@angular/core';
import { SimpleModalService } from '@looorent/ngx-simple-modal';

import { ViewResetPasswordRequestComponent } from '../view-reset-password-request.component';

@Injectable()
export class ViewResetPasswordRequestModalService {
  constructor(private simpleModalService: SimpleModalService) { }

  public showModal(): void {
    this
      .simpleModalService
      .addModal(
        ViewResetPasswordRequestComponent,
        null,
        {
          closeOnEscape: true,
          closeOnClickOutside: true,
          animationDuration: 200,
          wrapperDefaultClasses: 'modal modal-backdrop modal-default',
          wrapperClass: 'modal-active',
        }
      );
  }
}
