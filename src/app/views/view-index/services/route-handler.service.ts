import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import { IGetVideosQuery } from 'src/app/types/api/video-api.interface';

@Injectable()
export class RouteHandlerService {
  public routeQueryToFormValue(query: Params): IGetVideosQuery {
    const formValue: IGetVideosQuery = {};

    const page = +(query['page'] as string);

    if (!isNaN(page)) {
      formValue.page = page;
    }

    formValue.search = query['search'];

    return formValue;
  }

  public formValueToRouteQuery(formValue: IGetVideosQuery): Params {
    const result: Params = {
      search: formValue.search
    };

    if (formValue.page === 1) {
      result['page'] = null;
    } else {
      result['page'] = formValue.page;
    }

    return result;
  }
}
