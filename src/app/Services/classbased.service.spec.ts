import { TestBed } from '@angular/core/testing';

import { ClassbasedService } from './classbased.service';

describe('ClassbasedService', () => {
  let service: ClassbasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassbasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
