import { TestBed } from '@angular/core/testing';

import { DetalheService } from './detalhe.service';

describe('DetalheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalheService = TestBed.get(DetalheService);
    expect(service).toBeTruthy();
  });
});
