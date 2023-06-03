import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  IServerFormValidationField,
  IServerFormValidations
} from 'src/app/types/api/server-validation.interface';

@Injectable()
export class ServerValidationService {
  public getServerFormErrorMessage(serverError?: HttpErrorResponse | null): string | null {
    return (serverError?.error as IServerFormValidations)?.message ?? null;
  }

  public getServerFromFieldErrors(serverError?: HttpErrorResponse | null): IServerFormValidationField | null {
    return (serverError?.error as IServerFormValidations)?.data ?? null;
  }
}
