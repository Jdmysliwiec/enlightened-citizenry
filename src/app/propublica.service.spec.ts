import { TestBed, inject } from '@angular/core/testing';

import { PropublicaService } from './propublica.service';

describe('PropublicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropublicaService]
    });
  });

  it('should ...', inject([PropublicaService], (service: PropublicaService) => {
    expect(service).toBeTruthy();
  }));
});
