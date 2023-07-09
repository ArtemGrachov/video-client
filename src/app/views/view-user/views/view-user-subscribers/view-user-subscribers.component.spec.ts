import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserSubscribersComponent } from './view-user-subscribers.component';

describe('ViewUserSubscriptionsComponent', () => {
  let component: ViewUserSubscribersComponent;
  let fixture: ComponentFixture<ViewUserSubscribersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserSubscribersComponent]
    });
    fixture = TestBed.createComponent(ViewUserSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
