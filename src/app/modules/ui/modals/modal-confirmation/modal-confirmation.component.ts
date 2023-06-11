import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';

import { IModalConfirmationOptions } from './modal-confirmation.interface';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalConfirmationComponent extends SimpleModalComponent<IModalConfirmationOptions, boolean> {
  public title?: string | null;

  public question?: string | null;

  public confirmHandler(): void {
    this.result = true;
    this.close();
  }

  public rejectHandler(): void {
    this.result = false;
    this.close();
  }
}
