import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { HomeComponent } from './components/home/home.component';
import { ChessMovesComponent } from './components/chess-moves/chess-moves.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'placing-pieces', component: ChessBoardComponent },
  { path: 'moving-pieces', component: ChessMovesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
