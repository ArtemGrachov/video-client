import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable()
export class PageLoaderService {
  private loadingTokensSbj$: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);

  public loadingTokens$: Observable<string[]> = this.loadingTokensSbj$.asObservable();

  public active$: Observable<boolean> = this.loadingTokens$.pipe(map(tokens => tokens.length > 0));

  public get loadingTokensSnapshot(): string[] {
    return this.loadingTokensSbj$.getValue();
  }

  public addToken(token: string): void {
    const newArray = [...this.loadingTokensSnapshot, token];
    const set = new Set(newArray);
    const result = Array.from(set);

    this.loadingTokensSbj$.next(result);
  }

  public removeToken(token: string): void {
    const result = this.loadingTokensSnapshot.filter(t => t !== token);

    this.loadingTokensSbj$.next(result);
  }
}
