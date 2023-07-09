import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlockComponent } from './user-block.component';

describe('UserBlockComponent', () => {
  let component: UserBlockComponent;
  let fixture: ComponentFixture<UserBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBlockComponent]
    });
    fixture = TestBed.createComponent(UserBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
