import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaylistCreateComponent } from './view-playlist-create.component';

describe('ViewPlaylistCreateComponent', () => {
  let component: ViewPlaylistCreateComponent;
  let fixture: ComponentFixture<ViewPlaylistCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPlaylistCreateComponent]
    });
    fixture = TestBed.createComponent(ViewPlaylistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
