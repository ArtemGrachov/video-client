import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalHeaderComponent {
  @Output('close')
  private closeEmitter: EventEmitter<void> = new EventEmitter();

  public closeHandler(): void {
    this.closeEmitter.emit();
  }
}
