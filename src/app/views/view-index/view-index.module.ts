import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/main/shared/shared.module';
import { VideoGridModule } from 'src/app/modules/ui/video/video-grid/video-grid.module';
import { VideoListDataService } from 'src/app/services/video-list-data/video-list-data.service';
import { VideoListFormService } from 'src/app/services/video-list-form/video-list-form.service';
import { PlaceholderModule } from 'src/app/modules/ui/other/placeholder/placeholder.module';
import { RouteHandlerService } from './services/route-handler.service';
import { VideoApiService } from 'src/app/services/video-api/video-api.service';

import { ViewIndexRoutingModule } from './view-index-routing.module';
import { ViewIndexComponent } from './view-index.component';
import { L10nTranslationModule } from 'angular-l10n';

@NgModule({
  declarations: [
    ViewIndexComponent,
  ],
  imports: [
    SharedModule,
    ViewIndexRoutingModule,
    VideoGridModule,
    PlaceholderModule,
    L10nTranslationModule
  ],
  providers: [
    RouteHandlerService,
    VideoListDataService,
    VideoListFormService,
    VideoApiService,
  ]
})
export class ViewIndexModule { }
