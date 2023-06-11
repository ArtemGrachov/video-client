import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsCommentEditComponent } from './views-comment-edit.component';

describe('ViewsCommentEditComponent', () => {
  let component: ViewsCommentEditComponent;
  let fixture: ComponentFixture<ViewsCommentEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsCommentEditComponent]
    });
    fixture = TestBed.createComponent(ViewsCommentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
