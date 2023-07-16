import { Injectable } from '@angular/core';
import { L10nConfig, L10nProvider, L10nTranslationLoader } from 'angular-l10n';
import { Observable, from } from 'rxjs';

const LOCALE_UK = {
  language: 'uk-UA',
  currency: 'UAH',
  timeZone: 'EET',
}

const LOCALE_EN = {
  language: 'en-US',
  currency: 'USD',
  timeZone: 'America/Los_Angeles',
}

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
  ]
};

@Injectable()
export class TranslationLoader implements L10nTranslationLoader {
  public get(language: string, provider: L10nProvider): Observable<{ [key: string]: any }> {
    const data = import(`../i18n/${language}.json`);
    return from(data);
  }
}
