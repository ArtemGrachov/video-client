import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotFoundComponent } from './view-not-found.component';

describe('ViewNotFoundComponent', () => {
  let component: ViewNotFoundComponent;
  let fixture: ComponentFixture<ViewNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewNotFoundComponent]
    });
    fixture = TestBed.createComponent(ViewNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
