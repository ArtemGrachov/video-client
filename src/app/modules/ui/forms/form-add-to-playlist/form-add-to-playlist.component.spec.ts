import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddToPlaylistComponent } from './form-add-to-playlist.component';

describe('FormAddToPlaylistComponent', () => {
  let component: FormAddToPlaylistComponent;
  let fixture: ComponentFixture<FormAddToPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddToPlaylistComponent]
    });
    fixture = TestBed.createComponent(FormAddToPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
