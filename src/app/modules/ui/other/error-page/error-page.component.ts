import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { L10nTranslationService } from 'angular-l10n';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageComponent {
  @Input()
  public error!: any;

  constructor(private translationService: L10nTranslationService) {}

  public title$: Observable<string> = this
    .translationService
    .onChange()
    .pipe(map((() => {
      if (this.error?.code === 404) {
        return this.translationService.translate('error_page.not_found_title');
      }

      return this.translationService.translate('error_page.error_title');
    })))

  public subtitle$: Observable<string> = this
    .translationService
    .onChange()
    .pipe(map((() => {
      if (this.error?.code === 404) {
        return this.translationService.translate('error_page.not_found_subtitle');
      }

      return this.translationService.translate('error_page.error_subtitle');
    })))
}
