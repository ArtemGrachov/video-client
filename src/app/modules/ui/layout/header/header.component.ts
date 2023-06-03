import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewLoginModalService } from 'src/app/views/view-login/services/view-login-modal.service';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private viewLoginModalService: ViewLoginModalService) {}

  public openAuthModal(): void {
    this.viewLoginModalService.showModal();
  }

  ngOnInit() {
    this.openAuthModal()
  }
}
