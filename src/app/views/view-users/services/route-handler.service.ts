import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import { IGetPlaylistsQuery } from 'src/app/types/api/playlist-api.interface';

@Injectable()
export class RouteHandlerService {
  public routeQueryToFormValue(query: Params): IGetPlaylistsQuery {
    const formValue: IGetPlaylistsQuery = {};

    const page = +(query['page'] as string);

    if (!isNaN(page)) {
      formValue.page = page;
    }

    formValue.search = query['search'];

    return formValue;
  }

  public formValueToRouteQuery(formValue: IGetPlaylistsQuery): Params {
    const result: Params = {};

    if (formValue.search) {
      result['search'] = formValue.search
    }

    if (formValue.page === 1) {
      result['page'] = null;
    } else {
      result['page'] = formValue.page;
    }

    return result;
  }
}
