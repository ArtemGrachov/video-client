import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { L10N_LOCALE, L10nLocale, L10nTranslationService } from 'angular-l10n';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, map } from 'rxjs';

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
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  public readonly links$: Observable<ILocaleSwitchLink[]> = combineLatest([
    this.translation.onChange(),
    this.router.events,
  ])
    .pipe(
      map(() => {
        return l10nConfig.schema.map(item => {
          let currentLocalePrefix: string | null = PATH_KEYS[this.locale.language] ?? null;
          let newLocalePrefix: string | null = PATH_KEYS[item.locale.language] ?? null;

          if (this.locale.language === l10nConfig.defaultLocale.language) {
            currentLocalePrefix = null;
          }

          if (item.locale.language === l10nConfig.defaultLocale.language) {
            newLocalePrefix = null;
          }

          let path = this.router.url;

          if (currentLocalePrefix) {
            path = path.replace(`/${currentLocalePrefix}`, '');
          }

          if (newLocalePrefix) {
            path = `/${newLocalePrefix}${path}`
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
