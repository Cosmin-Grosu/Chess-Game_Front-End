import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { ChessPiecesService } from './chess-pieces.service';
import { HomeComponent } from './components/home/home.component';
import { ChessMovesComponent } from './components/chess-moves/chess-moves.component';


@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    HomeComponent,
    ChessMovesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ChessPiecesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
