import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubscribeButtonComponent } from './user-subscribe-button.component';

describe('UserSubscribeButtonComponent', () => {
  let component: UserSubscribeButtonComponent;
  let fixture: ComponentFixture<UserSubscribeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSubscribeButtonComponent]
    });
    fixture = TestBed.createComponent(UserSubscribeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
