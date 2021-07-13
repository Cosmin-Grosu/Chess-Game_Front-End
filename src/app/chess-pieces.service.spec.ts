import { TestBed } from '@angular/core/testing';

import { ChessPiecesService } from './chess-pieces.service';

describe('ChessPiecesService', () => {
  let service: ChessPiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessPiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
