import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreateVideoComponent } from './view-create-video.component';

describe('ViewCreateVideoComponent', () => {
  let component: ViewCreateVideoComponent;
  let fixture: ComponentFixture<ViewCreateVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCreateVideoComponent]
    });
    fixture = TestBed.createComponent(ViewCreateVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
