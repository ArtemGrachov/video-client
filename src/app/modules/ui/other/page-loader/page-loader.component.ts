import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PageLoaderService } from './services/page-loader.service';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLoaderComponent {
  constructor(private pageLoaderService: PageLoaderService) {}

  public active$: Observable<boolean> = this.pageLoaderService.active$;
}
