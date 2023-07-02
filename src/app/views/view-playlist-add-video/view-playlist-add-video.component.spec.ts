import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaylistAddVideoComponent } from './view-playlist-add-video.component';

describe('ViewPlaylistAddVideoComponent', () => {
  let component: ViewPlaylistAddVideoComponent;
  let fixture: ComponentFixture<ViewPlaylistAddVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPlaylistAddVideoComponent]
    });
    fixture = TestBed.createComponent(ViewPlaylistAddVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
