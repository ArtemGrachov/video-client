import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLikeButtonComponent } from './video-like-button.component';

describe('VideoLikeButtonComponent', () => {
  let component: VideoLikeButtonComponent;
  let fixture: ComponentFixture<VideoLikeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoLikeButtonComponent]
    });
    fixture = TestBed.createComponent(VideoLikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
