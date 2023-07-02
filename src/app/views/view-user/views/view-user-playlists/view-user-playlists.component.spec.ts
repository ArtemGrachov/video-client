import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserPlaylistsComponent } from './view-user-playlists.component';

describe('ViewUserPlaylistsComponent', () => {
  let component: ViewUserPlaylistsComponent;
  let fixture: ComponentFixture<ViewUserPlaylistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserPlaylistsComponent]
    });
    fixture = TestBed.createComponent(ViewUserPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
