import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLikeButtonComponent } from './comment-like-button.component';

describe('CommentLikeButtonComponent', () => {
  let component: CommentLikeButtonComponent;
  let fixture: ComponentFixture<CommentLikeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentLikeButtonComponent]
    });
    fixture = TestBed.createComponent(CommentLikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
