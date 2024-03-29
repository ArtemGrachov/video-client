import { NgModule } from '@angular/core';
import { L10nTranslationModule } from 'angular-l10n';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { VideoGridModule } from 'src/app/modules/ui/video/video-grid/video-grid.module';
import { ViewNewsComponent } from './view-news.component';
import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { RouteHandlerService } from './services/route-handler.service';
import { VideoApiService } from 'src/app/services/video-api/video-api.service';

import { ViewNewsRoutingModule } from './view-news-routing.module';
import { PlaceholderModule } from 'src/app/modules/ui/other/placeholder/placeholder.module';

@NgModule({
  declarations: [
    ViewNewsComponent,
  ],
  imports: [
    SharedModule,
    ViewNewsRoutingModule,
    VideoGridModule,
    PlaceholderModule,
    L10nTranslationModule,
  ],
  providers: [
    RouteHandlerService,
    VideoListDataService,
    VideoListFormService,
    VideoApiService,
  ]
})
export class ViewNewsModule { }
