import { TestBed } from '@angular/core/testing';

import { GravarDadosService } from './gravar-dados.service';

describe('GravarDadosService', () => {
  let service: GravarDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GravarDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
