import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlServerErrorComponent } from './control-server-error.component';

describe('ControlServerErrorComponent', () => {
  let component: ControlServerErrorComponent;
  let fixture: ComponentFixture<ControlServerErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlServerErrorComponent]
    });
    fixture = TestBed.createComponent(ControlServerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
