import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { L10N_LOCALE, L10nLocale, L10nTranslationService } from 'angular-l10n';
import { Observable, map } from 'rxjs';

import { PATH_KEYS, l10nConfig } from 'src/app/l10n-config';

import { ILocaleSwitchLink } from './locale-switch.interface';

@Component({
  selector: 'app-locale-switch',
  templateUrl: './locale-switch.component.html',
  styleUrls: ['./locale-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocaleSwitchComponent {
  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
  ) {}

  public readonly links$: Observable<ILocaleSwitchLink[]> = this
    .translation
    .onChange()
    .pipe(
      map(() => {
        return l10nConfig.schema.map(item => {
          const path = ['/'];

          let localePrefix: string | null = PATH_KEYS[item.locale.language] ?? null;

          if (item.locale.language === l10nConfig.defaultLocale.language) {
            localePrefix = null;
          }

          if (localePrefix) {
            path.push(localePrefix);
          }

          return {
            path,
            localeSchema: item,
            label: item.text!,
            active: this.locale.language === item.locale.language,
          };
        });
      }));

  public linkClickHandler(link: ILocaleSwitchLink): void {
    this.translation.setLocale(link.localeSchema.locale);
  }
}
