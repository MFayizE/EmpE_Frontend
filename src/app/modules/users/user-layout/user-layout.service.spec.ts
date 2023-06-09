import { TestBed } from '@angular/core/testing';

import { UserLayoutService } from './user-layout.service';

describe('UserLayoutService', () => {
  let service: UserLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
