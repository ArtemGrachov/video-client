import { Injectable } from '@angular/core';
import { SimpleModalService } from '@looorent/ngx-simple-modal';
import { ViewRegistrationComponent } from '../view-registration.component';

@Injectable()
export class ViewRegistrationModalService {
  constructor(private simpleModalService: SimpleModalService) { }

  public showModal(): void {
    this
      .simpleModalService
      .addModal(
        ViewRegistrationComponent,
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
