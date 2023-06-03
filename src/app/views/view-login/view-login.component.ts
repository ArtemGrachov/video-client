import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleModalComponent } from '@looorent/ngx-simple-modal';

import { VideoDataService } from 'src/app/modules/data/video-data/services/video-data.service';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewLoginComponent extends SimpleModalComponent<void, void> {}
