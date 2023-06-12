import { Component, ElementRef, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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

  private onChanged: any = () => {}

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

  public clearHandler(): void {
    this.changeHandler(null);
  }
}
