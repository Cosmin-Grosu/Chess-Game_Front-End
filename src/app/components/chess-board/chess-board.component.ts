import { Component, OnInit } from '@angular/core';
import { Piece } from '../../models/piece.model';
import { ChessPiecesService } from '../../chess-pieces.service';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {

  public player = "Player1";
  public step = "STEP 1: PLACING PIECES";
  public numberOfPiecesP1 = 3;
  public numberOfPiecesP2 = 3;
  public isPlayer1 = false;
  public isPlayer2 = false;
  public piece: Piece = new Piece();
  public boardArr: any;
  public newBoardArr: any;
  public isDisabled = true;
  public validInsert = false;
  public placePiece = true;
  // public piecesId: any;

  constructor(private _chessPiecesService: ChessPiecesService) {
  }

  ngOnInit(): void {
    this.boardArr = this._chessPiecesService.getPieces();
    // this.piecesId = [
    //   Object.values(this.boardArr[0]),
    //   Object.values(this.boardArr[1]),
    //   Object.values(this.boardArr[2]),
    //   Object.values(this.boardArr[3]),
    //   Object.values(this.boardArr[4]),
    //   Object.values(this.boardArr[5]),
    //   Object.values(this.boardArr[6]),
    //   Object.values(this.boardArr[7])
    // ];
    }

    onSubmit(){
      if (this.piece.verX < 0 || this.piece.verX > 7 || isNaN(this.piece.verX) || this.piece.verX == null || this.piece.horY < 0 
      || this.piece.horY > 7 || isNaN(this.piece.horY) || this.piece.horY == null || this.piece.type == null || this.piece.type == "" 
      || (this.piece.type.toLowerCase() != 'king' && this.piece.type.toLowerCase() != 'pawn' && this.piece.type.toLowerCase() != 'rook')) {
        alert("BAD input! PLEASE INSERT CORRECT VALUES!");
      } else {
        this.switchValuesPlacingPieces(this.piece.horY, this.piece.type.toLowerCase());
        if (this.isPlayer1) {
          this.numberOfPiecesP1--;
          this.player = "Player2";
        } else if (this.isPlayer2) {
          this.numberOfPiecesP2--;
          this.player = "Player1";
        }
        if (this.numberOfPiecesP1 == 0 && this.numberOfPiecesP2 == 0) {
          this.isDisabled = false;
          this.validInsert = true;
          this.step = "FINISHED PLACING PIECES!";
          this.player = "Press 'Next step' button!";
        }
        this.cleanButtonClicked();       
      }
    }
    

    setImage(boardImage: any, type: any) {
      this.placePiece = true;
      if (this.player == "Player1") {
        this.isPlayer1 = true;
        this.isPlayer2 = false;
        if (boardImage == "w") {
          switch (type) {
            case "pawn":
              this.piece.image = "w-white-pawn"
              break;
            case "king":
              this.piece.image = "w-white-king"
              break;
            case "rook":
              this.piece.image = "w-white-rook"
              break;
          }
        } else if (boardImage == "b") {
          switch (type) {
            case "pawn":
              this.piece.image = "b-white-pawn"
              break;
            case "king":
              this.piece.image = "b-white-king"
              break;
            case "rook":
              this.piece.image = "b-white-rook"
              break;
          }
        } else {
          this.isPlayer1 = false;
          this.placePiece = false;
          alert("THE POSITION YOU ARE TRYING TO INSERT IS ALREADY OCCUPIED!");
        }
        
      } else {
        this.isPlayer2 = true;
        this.isPlayer1 = false;
        if (boardImage == "w") {
          switch (type) {
            case "pawn":
              this.piece.image = "w-black-pawn"
              break;
            case "king":
              this.piece.image = "w-black-king"
              break;
            case "rook":
              this.piece.image = "w-black-rook"
              break;
          }
        } else if (boardImage == "b") {
          switch (type) {
            case "pawn":
              this.piece.image = "b-black-pawn"
              break;
            case "king":
              this.piece.image = "b-black-king"
              break;
            case "rook":
              this.piece.image = "b-black-rook"
              break;
          }
        } else {
          this.isPlayer2 = false;
          this.placePiece = false;
          alert("THE POSITION YOU ARE TRYING TO INSERT IS ALREADY OCCUPIED!");
        }
      }
    }


    switchValuesPlacingPieces(y: any, type: any){
      switch (y) {
        case "0":
          this.setImage(this.boardArr[this.piece.verX].i0, type);
          if (this.placePiece == true) {
            this.boardArr[this.piece.verX].i0 = this.piece.image;
          }
          break;
        case "1":
          this.setImage(this.boardArr[this.piece.verX].i1, type);
          if (this.placePiece == true) {
            this.boardArr[this.piece.verX].i1 = this.piece.image;
          }
          break;
        case "2":
          this.setImage(this.boardArr[this.piece.verX].i2, type);
          if (this.placePiece == true) {
            this.boardArr[this.piece.verX].i2 = this.piece.image;
          }
          break;
        case "3":
          this.setImage(this.boardArr[this.piece.verX].i3, type);
          if (this.placePiece == true) {
            this.boardArr[this.piece.verX].i3 = this.piece.image;
          }
          break;
        case "4":
          this.setImage(this.boardArr[this.piece.verX].i4, type);
          if (this.placePiece == true) {
            this.boardArr[this.piece.verX].i4 = this.piece.image;
          }
          break;
        case "5":
          this.setImage(this.boardArr[this.piece.verX].i5, type);
          if (this.placePiece == true) {
            this.boardArr[this.piece.verX].i5 = this.piece.image;
          }
          break;
        case "6":
          this.setImage(this.boardArr[this.piece.verX].i6, type);
          if (this.placePiece == true) {
            this.boardArr[this.piece.verX].i6 = this.piece.image;
          }
          break;
        case "7":
          this.setImage(this.boardArr[this.piece.verX].i7, type);
          if (this.placePiece == true) {
            this.boardArr[this.piece.verX].i7 = this.piece.image;
          }
          break;
      }
      this.newBoardArr = this.boardArr;
    }

    getNewBoardArr() {
      this.newBoardArr = this.boardArr;
      this._chessPiecesService.sendNewBoardArrTest(this.newBoardArr);
      // if (this.numberOfPiecesP1 > 0 && this.numberOfPiecesP2 > 0) {
      //   // this._chessPiecesService.sendNewBoardArr(this.newBoardArr);
      //   // this._chessPiecesService.sendNewBoardArrTest(this.newBoardArr);
      // }
    }

    cleanButtonClicked() {
      this.piece = new Piece();
    }

}
