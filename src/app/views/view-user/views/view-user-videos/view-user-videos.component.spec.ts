import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserVideosComponent } from './view-user-videos.component';

describe('ViewUserVideosComponent', () => {
  let component: ViewUserVideosComponent;
  let fixture: ComponentFixture<ViewUserVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserVideosComponent]
    });
    fixture = TestBed.createComponent(ViewUserVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
