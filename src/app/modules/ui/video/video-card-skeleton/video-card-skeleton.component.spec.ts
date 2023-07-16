import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardSkeletonComponent } from './video-card-skeleton.component';

describe('VideoCardSkeletonComponent', () => {
  let component: VideoCardSkeletonComponent;
  let fixture: ComponentFixture<VideoCardSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCardSkeletonComponent]
    });
    fixture = TestBed.createComponent(VideoCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
