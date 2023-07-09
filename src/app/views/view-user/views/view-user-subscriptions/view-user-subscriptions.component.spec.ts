import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserSubscriptionsComponent } from './view-user-subscriptions.component';

describe('ViewUserSubscriptionsComponent', () => {
  let component: ViewUserSubscriptionsComponent;
  let fixture: ComponentFixture<ViewUserSubscriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserSubscriptionsComponent]
    });
    fixture = TestBed.createComponent(ViewUserSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
