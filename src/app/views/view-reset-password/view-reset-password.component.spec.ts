import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResetPasswordComponent } from './view-reset-password.component';

describe('ViewResetPasswordComponent', () => {
  let component: ViewResetPasswordComponent;
  let fixture: ComponentFixture<ViewResetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewResetPasswordComponent]
    });
    fixture = TestBed.createComponent(ViewResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
