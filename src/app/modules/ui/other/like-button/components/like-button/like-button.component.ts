import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeButtonComponent {
  @Input('isLiked')
  public isLiked: boolean = false;

  @Input('likesCount')
  public likesCount: number = 0;

  @Input('processing')
  public processing: boolean = false;

  @Output('click')
  private clickEmitter: EventEmitter<void> = new EventEmitter();

  public get iconName(): string {
    return this.isLiked ? 'favorite' : 'favorite_border';
  }

  public clickHandler(): void {
    this.clickEmitter.emit();
  }
}
