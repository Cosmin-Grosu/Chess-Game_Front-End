import { Component, OnInit } from '@angular/core';
import { ChessPiecesService } from '../../chess-pieces.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Piece } from '../../models/piece.model';


@Component({
  selector: 'app-chess-moves',
  templateUrl: './chess-moves.component.html',
  styleUrls: ['./chess-moves.component.css']
})
export class ChessMovesComponent implements OnInit {

  public player = "Player1";
  public step = "STEP 2: MOVING PIECES";
  public numberOfPiecesP1 = 3;
  public numberOfPiecesP2 = 3;
  public decreasePieces1: any;
  public decreasePieces2: any;
  public isPlayer1 = false;
  public isPlayer2 = false;
  public piece: Piece = new Piece();
  public boardArr: any;
  public isDisabled = true;
  public validInsert = false;
  public validMove = false;
  public movePiece: any;

  constructor(private _chessPiecesService: ChessPiecesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.boardArr = this._chessPiecesService.getChangedBoardArr();

    // this._chessPiecesService.newBoardArr$.subscribe(
    //   arr => {
    //     if (arr.length > 0) {
    //       this.boardArr = arr;
    //     }
    //   }
    // );

  }

  onSubmit(){
    if (this.piece.startX < 0 || this.piece.startX > 7 || isNaN(this.piece.startX) || this.piece.startX == null || this.piece.endX < 0 
      || this.piece.endX > 7 || isNaN(this.piece.endX) || this.piece.endX == null || this.piece.startY < 0 || this.piece.startY > 7 || 
      isNaN(this.piece.startY) || this.piece.startY == null || this.piece.endY < 0 || this.piece.endY > 7 || isNaN(this.piece.endY) || 
      this.piece.endY == null) {
        alert("BAD input! PLEASE INSERT CORRECT VALUES!");
      } else {
        this.switchValuesMovingPieces();
        if (this.isPlayer1) {
          this.player = "Player2";
        } else if (this.isPlayer2) {
          this.player = "Player1";
        }
        if (this.decreasePieces1) {
          this.numberOfPiecesP1--;
        } else if (this.decreasePieces2) {
          this.numberOfPiecesP2--;
        }

        if (this.numberOfPiecesP1 == 0) {
          this.isDisabled = false;
          this.validInsert = true;
          this.step = "END OF THE GAME!";
          this.player = "Player2 is the WINNER!";
        } else if (this.numberOfPiecesP2 == 0) {
          this.isDisabled = false;
          this.validInsert = true;
          this.step = "END OF THE GAME!";
          this.player = "Player1 is the WINNER!";
        }
        this.cleanButtonClicked();       
      }
  }


  setNewImage(boardImage: any) {
    this.movePiece = true;
    if (this.player == "Player1") {
      this.isPlayer1 = true;
      this.isPlayer2 = false;
      if (boardImage == "w" || boardImage == "b" || boardImage == "w-black-pawn" 
      || boardImage == "w-black-king" || boardImage == "w-black-rook" || boardImage == "b-black-pawn" 
      || boardImage == "b-black-king" || boardImage == "b-black-rook") {
        this.isPlayer1 = false;
        this.movePiece = false;
        alert("The piece you are trying to move is not your piece!");
      } else {
        switch(boardImage.substring(8)) {
          case "pawn":
            if (this.movePawn()) {
              this.movePiece = true;
            } else {
              this.isPlayer1 = false;
              this.movePiece = false;
            }
            break;
          case "king":
            if (this.moveKing()) {
              this.movePiece = true;
            } else {
              this.isPlayer1 = false;
              this.movePiece = false;
            }
            break;
          case "rook":
            if (this.moveRook()) {
              this.movePiece = true;
            } else {
              this.isPlayer1 = false;
              this.movePiece = false;
            }
            break;
        }
      }
    } else {
      this.isPlayer2 = true;
      this.isPlayer1 = false;
      if (boardImage == "w" || boardImage == "b" || boardImage == "w-white-pawn" 
      || boardImage == "w-white-king" || boardImage == "w-white-rook" || boardImage == "b-white-pawn" 
      || boardImage == "b-white-king" || boardImage == "b-white-rook") {
        this.isPlayer2 = false;
        this.movePiece = false;
        alert("The piece you are trying to move is not your piece!");
      } else {
        switch(boardImage.substring(8)) {
          case "pawn":
            if (this.movePawn()) {
              this.movePiece = true;
            } else {
              this.isPlayer2 = false;
              this.movePiece = false;
            }
            break;
          case "king":
            if (this.moveKing()) {
              this.movePiece = true;
            } else {
              this.isPlayer2 = false;
              this.movePiece = false;
            }
            break;
          case "rook":
            if (this.moveRook()) {
              this.movePiece = true;
            } else {
              this.isPlayer2 = false;
              this.movePiece = false;
            }
            break;
        }
      }
    }
  }


  switchValuesMovingPieces() {
    var img: any;
    var getImg: any;
    switch (this.piece.startY) {
      case "0":
        img = this.boardArr[this.piece.startX].i0;
        getImg = img;
        this.setNewImage(img);
        if (this.movePiece == true) {
          this.boardArr[this.piece.startX].i0 = img.charAt(0);
          if (!this.switchEndPiece(img)) {
            this.boardArr[this.piece.startX].i0 = getImg;
            this.checkPieces2();
          }
        }
        break;
      case "1":
        img = this.boardArr[this.piece.startX].i1;
        getImg = img;
        this.setNewImage(img);
        if (this.movePiece == true) {
          this.boardArr[this.piece.startX].i1 = img.charAt(0);
          if (!this.switchEndPiece(img)) {
            this.boardArr[this.piece.startX].i1 = getImg;
            this.checkPieces2();
          }
        }
        break;
      case "2":
        img = this.boardArr[this.piece.startX].i2;
        getImg = img;
        this.setNewImage(img);
        if (this.movePiece == true) {
          this.boardArr[this.piece.startX].i2 = img.charAt(0);
          if (!this.switchEndPiece(img)) {
            this.boardArr[this.piece.startX].i2 = getImg;
            this.checkPieces2();
          }
        }
        break;
      case "3":
        img = this.boardArr[this.piece.startX].i3;
        getImg = img;
        this.setNewImage(img);
        if (this.movePiece == true) {
          this.boardArr[this.piece.startX].i3 = img.charAt(0);
          if (!this.switchEndPiece(img)) {
            this.boardArr[this.piece.startX].i3 = getImg;
            this.checkPieces2();
          }
        }
        break;
      case "4":
        img = this.boardArr[this.piece.startX].i4;
        getImg = img;
        this.setNewImage(img);
        if (this.movePiece == true) {
          this.boardArr[this.piece.startX].i4 = img.charAt(0);
          if (!this.switchEndPiece(img)) {
            this.boardArr[this.piece.startX].i4 = getImg;
            this.checkPieces2();
          }
        }
        break;
      case "5":
        img = this.boardArr[this.piece.startX].i5;
        getImg = img;
        this.setNewImage(img);
        if (this.movePiece == true) {
          this.boardArr[this.piece.startX].i5 = img.charAt(0);
          if (!this.switchEndPiece(img)) {
            this.boardArr[this.piece.startX].i5 = getImg;
            this.checkPieces2();
          }
        }
        break;
      case "6":
        img = this.boardArr[this.piece.startX].i6;
        getImg = img;
        this.setNewImage(img);
        if (this.movePiece == true) {
          this.boardArr[this.piece.startX].i6 = img.charAt(0);
          if (!this.switchEndPiece(img)) {
            this.boardArr[this.piece.startX].i6 = getImg;
            this.checkPieces2();
          }
        }
        break;
      case "7":
        img = this.boardArr[this.piece.startX].i7;
        getImg = img;
        this.setNewImage(img);
        if (this.movePiece == true) {
          this.boardArr[this.piece.startX].i7 = img.charAt(0);
          if (!this.switchEndPiece(img)) {
            this.boardArr[this.piece.startX].i7 = getImg;
            this.checkPieces2();
          }
        }
        break;
    }
  }


  checkPieces1() {
    if (this.player == "Player1") {
      this.decreasePieces2 = true;
    } else {
      this.decreasePieces1 = true;
    }
  }


  checkPieces2() {
    alert("The end piece it's your own piece!");
    this.decreasePieces1 = false;
    this.decreasePieces2 = false;
    if (this.player == "Player1") {
      this.isPlayer1 = false;
    } else {
      this.isPlayer2 = false;
    }
  }


  checkPieces3() {
    this.decreasePieces1 = false;
    this.decreasePieces2 = false;
  }


  switchEndPiece(img: any) {
    var checkEndImg: any;
    if (this.movePiece == true) {
      checkEndImg = true;
      var tempImg: any;
      switch(this.piece.endY) {
        case "0":
          tempImg = this.boardArr[this.piece.endX].i0;
          if (img.substring(2, 7) != tempImg.substring(2, 7)) {
            if (img.charAt(0) == tempImg.charAt(0)) {
              this.boardArr[this.piece.endX].i0 = img;
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            } else {
              this.boardArr[this.piece.endX].i0 = tempImg.charAt(0) + img.substring(1);
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            }
          } else {
            checkEndImg = false;
          }
          break;
        case "1":
          tempImg = this.boardArr[this.piece.endX].i1;
          if (img.substring(2, 7) != tempImg.substring(2, 7)) {
            if (img.charAt(0) == tempImg.charAt(0)) {
              this.boardArr[this.piece.endX].i1 = img;
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            } else {
              this.boardArr[this.piece.endX].i1 = tempImg.charAt(0) + img.substring(1);
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            }
          } else {
            checkEndImg = false;
          }
          break;
        case "2":
          tempImg = this.boardArr[this.piece.endX].i2;
          if (img.substring(2, 7) != tempImg.substring(2, 7)) {
            if (img.charAt(0) == tempImg.charAt(0)) {
              this.boardArr[this.piece.endX].i2 = img;
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            } else {
              this.boardArr[this.piece.endX].i2 = tempImg.charAt(0) + img.substring(1);
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            }
          } else {
            checkEndImg = false;
          }
          break;
        case "3":
          tempImg = this.boardArr[this.piece.endX].i3;
          if (img.substring(2, 7) != tempImg.substring(2, 7)) {
            if (img.charAt(0) == tempImg.charAt(0)) {
              this.boardArr[this.piece.endX].i3 = img;
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            } else {
              this.boardArr[this.piece.endX].i3 = tempImg.charAt(0) + img.substring(1);
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            }
          } else {
            checkEndImg = false;
          }
          break;
        case "4":
          tempImg = this.boardArr[this.piece.endX].i4;
          if (img.substring(2, 7) != tempImg.substring(2, 7)) {
            if (img.charAt(0) == tempImg.charAt(0)) {
              this.boardArr[this.piece.endX].i4 = img;
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            } else {
              this.boardArr[this.piece.endX].i4 = tempImg.charAt(0) + img.substring(1);
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            }
          } else {
            checkEndImg = false;
          }
          break;
        case "5":
          tempImg = this.boardArr[this.piece.endX].i5;
          if (img.substring(2, 7) != tempImg.substring(2, 7)) {
            if (img.charAt(0) == tempImg.charAt(0)) {
              this.boardArr[this.piece.endX].i5 = img;
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            } else {
              this.boardArr[this.piece.endX].i5 = tempImg.charAt(0) + img.substring(1);
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            }
          } else {
            checkEndImg = false;
          }
          break;
        case "6":
          tempImg = this.boardArr[this.piece.endX].i6;
          if (img.substring(2, 7) != tempImg.substring(2, 7)) {
            if (img.charAt(0) == tempImg.charAt(0)) {
              this.boardArr[this.piece.endX].i6 = img;
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            } else {
              this.boardArr[this.piece.endX].i6 = tempImg.charAt(0) + img.substring(1);
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            }
          } else {
            checkEndImg = false;
          }
          break;
        case "7":
          tempImg = this.boardArr[this.piece.endX].i7;
          if (img.substring(2, 7) != tempImg.substring(2, 7)) {
            if (img.charAt(0) == tempImg.charAt(0)) {
              this.boardArr[this.piece.endX].i7 = img;
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            } else {
              this.boardArr[this.piece.endX].i7 = tempImg.charAt(0) + img.substring(1);
              if (tempImg.length > 1) {
                this.checkPieces1();
              } else {
                this.checkPieces3();
              }
            }
          } else {
            checkEndImg = false;
          }
          break;
      }
    }
    return checkEndImg;
  }


  moveRook() {
    var x = Math.abs(this.piece.startX - this.piece.endX);
		var y = Math.abs(this.piece.startY - this.piece.endY);
    var retValue = (((x >= 1) && (x <= 7)) && (y == 0))
    || (((y >= 1) && (y <= 7)) && (x == 0));
    if (retValue) {
      return retValue;
    } else {
      alert("The ROOK can be moved according to it's pattern!");
    }
		return false;
  }


  movePawn() {
    var x = Math.abs(this.piece.startX - this.piece.endX);
		var y = Math.abs(this.piece.startY - this.piece.endY);
    var retValue = (((x >= 1) && (x <= 3)) && (y == 0))
    || (((y >= 1) && (y <= 3)) && (x == 0));
		if (retValue) {
      return retValue;
    } else {
      alert("The PAWN can be moved according to it's pattern!");
    }
		return false; 
  }


  moveKing() {
    var x = Math.abs(this.piece.startX - this.piece.endX);
		var y = Math.abs(this.piece.startY - this.piece.endY);
    var retValue = ((x == 1) && (y == 0)) || ((x == 0) && (y == 1)) 
    || ((x == 1) && (y == 1));
		if (retValue) {
      return retValue;
    } else {
      alert("The KING can be moved according to it's pattern!");
    }
		return false;
  }


  cleanButtonClicked() {
    this.piece = new Piece();
  }

}
