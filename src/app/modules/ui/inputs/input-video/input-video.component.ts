import { isPlatformServer } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { prettySize } from 'pretty-size';

@Component({
  selector: 'app-input-video',
  templateUrl: './input-video.component.html',
  styleUrls: ['./input-video.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputVideoComponent),
      multi: true,
    },
  ],
})
export class InputVideoComponent implements ControlValueAccessor {
  @ViewChild('input')
  public inputEl!: ElementRef<HTMLInputElement>;

  private value: File | null = null;

  private onTouched: any = () => {};

  private onChanged: any = () => {};

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  public get videoSrc(): string | null {
    if (isPlatformServer(this.platformId) || !this.value) {
      return null;
    }

    try {
      return URL.createObjectURL(this.value);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public get showVideo(): boolean {
    return Boolean(this.videoSrc);
  }

  public get fileName(): string | null {
    return this.value?.name ?? null;
  }

  public get fileSizeFormatted(): string | null {
    if (!this.value) {
      return null;
    }

    return prettySize(this.value.size)
  }

  public writeValue(value: File | null): void {
    this.value = value;
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

  public changeHandler(value: File | null): void {
    this.value = value;

    if (this.onChanged) {
      this.onChanged(this.value);
    }
  }

  public uploadHandler(): void {
    this.inputEl.nativeElement.click();
  }

  public clearHandler(): void {
    this.changeHandler(null);
  }
}
