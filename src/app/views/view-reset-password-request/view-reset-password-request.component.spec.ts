import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResetPasswordRequestComponent } from './view-reset-password-request.component';

describe('ViewResetPasswordRequestComponent', () => {
  let component: ViewResetPasswordRequestComponent;
  let fixture: ComponentFixture<ViewResetPasswordRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewResetPasswordRequestComponent]
    });
    fixture = TestBed.createComponent(ViewResetPasswordRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
