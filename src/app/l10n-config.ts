import { Location } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import {
  L10N_CONFIG,
  L10nConfig,
  L10nLocale,
  L10nLocaleResolver,
  L10nProvider,
  L10nTranslationLoader,
} from 'angular-l10n';
import { Observable, from } from 'rxjs';

import { IDictionary } from './types/other/dictionary.interface';

const LOCALE_UK = {
  language: 'uk-UA',
  currency: 'UAH',
  timeZone: 'EET',
};

const LOCALE_EN = {
  language: 'en-US',
  currency: 'USD',
  timeZone: 'America/Los_Angeles',
};

const PATH_KEYS: IDictionary<string> = {
  'uk-UA': 'ua',
  'en-US': 'en',
};

export const l10nConfig: L10nConfig = {
  format: 'language-region',
  providers: [
    { name: 'app', asset: 'app' }
  ],
  cache: true,
  keySeparator: '.',
  defaultLocale: LOCALE_UK,
  schema: [
    { locale: LOCALE_UK },
    { locale: LOCALE_EN },
  ],
};

@Injectable()
export class TranslationLoader implements L10nTranslationLoader {
  public get(language: string, provider: L10nProvider): Observable<{ [key: string]: any }> {
    const data = import(`../i18n/${language}.json`);
    return from(data);
  }
}

@Injectable()
export class LocaleResolver implements L10nLocaleResolver {
  constructor(
    @Inject(L10N_CONFIG) private config: L10nConfig,
    private location: Location,
  ) { }

  public async get(): Promise<L10nLocale | null> {
    const path = this.location.path();

    for (const schema of this.config.schema) {
      const language = schema.locale.language;
      const pathKey = PATH_KEYS[language] ?? '';

      if (new RegExp(`(\/${pathKey}\/)|(\/${pathKey}$)|(\/(${pathKey})(?=\\?))`).test(path)) {
        return Promise.resolve(schema.locale);
      }
    }

    return Promise.resolve(null);
  }
}
