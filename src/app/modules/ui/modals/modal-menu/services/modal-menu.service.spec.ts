import { TestBed } from '@angular/core/testing';

import { ModalMenuService } from './modal-menu.service';

describe('ModalMenuService', () => {
  let service: ModalMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
