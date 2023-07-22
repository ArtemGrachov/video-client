import { Inject, Pipe, PipeTransform } from '@angular/core';
import { L10N_LOCALE, L10nLocale } from 'angular-l10n';
import { isArray } from 'lodash';

import { l10nConfig, PATH_KEYS } from 'src/app/l10n-config';

@Pipe({ name: 'routeLocalization' })
export class RouteLocalizationPipe implements PipeTransform {
  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale) {}

  transform(value: string | Array<any> | null): string | any[] | null {
    if (value == null) {
      return value;
    }

    let localePrefix: string | null = PATH_KEYS[this.locale.language] ?? null;

    if (this.locale.language === l10nConfig.defaultLocale.language) {
      localePrefix = null;
    }

    if (localePrefix == null) {
      return value;
    }

    if (isArray(value)) {
      let filteredValue = [...value];

      if (filteredValue[0] === '/') {
        filteredValue.splice(0, 1);
      }
      return ['/', localePrefix, ...filteredValue];
    }

    if (value[0] === '/') {
      value = value.slice(1);
    }

    return `/${localePrefix}${value}`;
  }
}
