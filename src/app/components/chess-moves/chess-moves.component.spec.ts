import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessMovesComponent } from './chess-moves.component';

describe('ChessMovesComponent', () => {
  let component: ChessMovesComponent;
  let fixture: ComponentFixture<ChessMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessMovesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
