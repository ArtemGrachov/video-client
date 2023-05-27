import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndexComponent } from './view-index.component';

describe('ViewIndexComponent', () => {
  let component: ViewIndexComponent;
  let fixture: ComponentFixture<ViewIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewIndexComponent]
    });
    fixture = TestBed.createComponent(ViewIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
