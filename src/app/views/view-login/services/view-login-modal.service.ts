import { Injectable } from '@angular/core';
import { SimpleModalService } from '@looorent/ngx-simple-modal';
import { ViewLoginComponent } from '../view-login.component';

@Injectable()
export class ViewLoginModalService {
  constructor(private simpleModalService: SimpleModalService) { }

  public showModal(redirectTo?: string | null): void {
    this
      .simpleModalService
      .addModal(
        ViewLoginComponent,
        {
          redirectTo,
        },
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
