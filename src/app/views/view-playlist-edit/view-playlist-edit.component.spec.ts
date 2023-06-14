import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaylistEditComponent } from './view-playlist-edit.component';

describe('ViewPlaylistEditComponent', () => {
  let component: ViewPlaylistEditComponent;
  let fixture: ComponentFixture<ViewPlaylistEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPlaylistEditComponent]
    });
    fixture = TestBed.createComponent(ViewPlaylistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
