import { TestBed } from '@angular/core/testing';

import { TowerService } from 'src/app/tower/services/tower.service';

describe('TowerService', () => {
  let service: TowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
