import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailComponent {
  @Input('src')
  public src?: string

  public get backgroundImage(): string {
    if (!this.src) {
      return '';
    }

    return `url(${this.src})`;
  }
}
