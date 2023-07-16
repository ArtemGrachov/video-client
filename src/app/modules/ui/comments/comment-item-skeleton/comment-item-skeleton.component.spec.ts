import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentItemSkeletonComponent } from './comment-item-skeleton.component';

describe('CommentItemSkeletonComponent', () => {
  let component: CommentItemSkeletonComponent;
  let fixture: ComponentFixture<CommentItemSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentItemSkeletonComponent]
    });
    fixture = TestBed.createComponent(CommentItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
