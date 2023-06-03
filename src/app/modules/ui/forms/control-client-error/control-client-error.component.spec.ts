import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlClientErrorComponent } from './control-client-error.component';

describe('ControlClientErrorComponent', () => {
  let component: ControlClientErrorComponent;
  let fixture: ComponentFixture<ControlClientErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlClientErrorComponent]
    });
    fixture = TestBed.createComponent(ControlClientErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
