import { TestBed } from '@angular/core/testing';

import { RecipieListService } from './recipie-list.service';

describe('RecipieListService', () => {
  let service: RecipieListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipieListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
