import { isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { prettySize } from 'pretty-size';

import { ConfigService } from 'src/app/modules/main/core/services/config.service';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputImageComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputImageComponent {
  @ViewChild('input')
  public inputEl!: ElementRef<HTMLInputElement>;

  @Input()
  public initialValue?: File | string | null;

  private value$: BehaviorSubject<File | string | null> = new BehaviorSubject(null as File | string | null);

  private onTouched: any = () => {};

  private onChanged: any = () => {};

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private configService: ConfigService,
  ) {}

  public get imageInputAcceptAttr(): string {
    return this.configService.imageInputAcceptAttr;
  }

  public imageSrc$: Observable<string | null> = this
    .value$
    .pipe(
      map((value) => {
        if (isPlatformServer(this.platformId) || !value) {
          return null;
        }

        if (typeof value === 'string') {
          return value;
        }

        try {
          return URL.createObjectURL(value);
        } catch (error) {
          console.error(error);
          return null;
        }
      })
  )

  public showImage$: Observable<boolean> = this.imageSrc$.pipe(map(imageSrc => Boolean(imageSrc)))

  public showPlaceholder$: Observable<boolean> = this.value$.pipe(map(value => !value));

  public fileName$: Observable<string | null> = this.value$.pipe(map(value => {
    if (typeof value === 'string') {
      return null;
    }

    return value?.name ?? null;
  }));

  public get allowReset(): boolean {
    return this.initialValue != null;
  }

  public fileSizeFormatted$: Observable<string | null> = this.value$.pipe(map(value => {
    if (!value || typeof value === 'string') {
      return null;
    }

    return prettySize(value.size)
  }))

  public writeValue(value: File | null): void {
    this.value$.next(value);
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  public touchHandler(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  public inputChangeHandler(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    const value = files!.item(0);
    this.inputEl.nativeElement.value = '';

    this.changeHandler(value);
  }

  public changeHandler(value: File | string | null): void {
    this.value$.next(value);

    if (this.onChanged) {
      this.onChanged(value);
    }
  }

  public uploadHandler(): void {
    this.inputEl.nativeElement.click();
  }

  public clearHandler(): void {
    this.changeHandler(null);
  }

  public resetHandler(): void {
    this.changeHandler(this.initialValue ?? null);
  }
}
