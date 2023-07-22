import { L10nSchema } from 'angular-l10n';
import { ILink } from 'src/app/types/other/link.interface';

export interface ILocaleSwitchLink extends ILink {
  localeSchema: L10nSchema;
  active: boolean;
}
