import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResetPasswordRequestComponent } from './form-reset-password-request.component';

describe('FormResetPasswordRequestComponent', () => {
  let component: FormResetPasswordRequestComponent;
  let fixture: ComponentFixture<FormResetPasswordRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormResetPasswordRequestComponent]
    });
    fixture = TestBed.createComponent(FormResetPasswordRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
