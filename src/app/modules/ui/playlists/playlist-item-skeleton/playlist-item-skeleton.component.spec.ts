import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistItemSkeletonComponent } from './playlist-item-skeleton.component';

describe('PlaylistItemSkeletonComponent', () => {
  let component: PlaylistItemSkeletonComponent;
  let fixture: ComponentFixture<PlaylistItemSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistItemSkeletonComponent]
    });
    fixture = TestBed.createComponent(PlaylistItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
