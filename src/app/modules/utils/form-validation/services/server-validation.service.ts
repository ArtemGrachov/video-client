import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get, isArray } from 'lodash';

import {
  IServerFormValidationField,
  IServerFormValidations,
  IServerFieldValidations
} from 'src/app/types/api/server-validation.interface';

@Injectable()
export class ServerValidationService {
  public getServerFormErrorMessage(serverError?: HttpErrorResponse | null): string | null {
    return (serverError?.error as IServerFormValidations)?.message ?? null;
  }

  public getServerFormFieldsErrors(serverError?: HttpErrorResponse | null): IServerFormValidationField | null {
    return (serverError?.error as IServerFormValidations)?.data ?? null;
  }

  public getServerFormFieldValidation(path?: string, serverError?: HttpErrorResponse | null): IServerFieldValidations[] {
    const formFields = this.getServerFormFieldsErrors(serverError);

    if (!formFields) {
      return [];
    }

    if (!path) {
      return [];
    }

    const result = get(formFields, path);

    if (isArray(result)) {
      return result;
    }

    return [];
  }
}
