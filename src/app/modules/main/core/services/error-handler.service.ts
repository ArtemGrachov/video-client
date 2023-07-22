import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ErrorHandlerService {
  private errorSbj$: BehaviorSubject<any> = new BehaviorSubject(null);

  public error$: Observable<any> = this.errorSbj$.asObservable();

  public get errorSnapshot(): any {
    return this.errorSbj$.getValue();
  }

  public setError(error: any): void {
    this.errorSbj$.next(error);
  }
}
