import { TestBed } from '@angular/core/testing';

import { ToyBrowseService } from './toy-browse.service';

describe('ToyBrowseService', () => {
  let service: ToyBrowseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToyBrowseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
