import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServerErrorComponent } from './form-server-error.component';

describe('FormServerErrorComponent', () => {
  let component: FormServerErrorComponent;
  let fixture: ComponentFixture<FormServerErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormServerErrorComponent]
    });
    fixture = TestBed.createComponent(FormServerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
