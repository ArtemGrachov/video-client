import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditVideoComponent } from './view-edit-video.component';

describe('ViewEditVideoComponent', () => {
  let component: ViewEditVideoComponent;
  let fixture: ComponentFixture<ViewEditVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEditVideoComponent]
    });
    fixture = TestBed.createComponent(ViewEditVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
