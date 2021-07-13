import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChessPiecesService {

  public changedBoardArr = [];

  private _newBoardArrSource = new Subject<Array<any>>();
  newBoardArr$ = this._newBoardArrSource.asObservable();

  constructor() { }

  
  // sendNewBoardArr(arr: Array<any>) {
  //   this._newBoardArrSource.next(arr);
  // }

  sendNewBoardArrTest(arr: any) {
    this.changedBoardArr = arr;
  }

  getChangedBoardArr() {
    return this.changedBoardArr;
  }

  getPieces() {
    return [
      {
        i0: "b",
        i1: "w",
        i2: "b",
        i3: "w",
        i4: "b",
        i5: "w",
        i6: "b",
        i7: "w"
      },
      {
        i0: "w",
        i1: "b",
        i2: "w",
        i3: "b",
        i4: "w",
        i5: "b",
        i6: "w",
        i7: "b"
      },
      {
        i0: "b",
        i1: "w",
        i2: "b",
        i3: "w",
        i4: "b",
        i5: "w",
        i6: "b",
        i7: "w"
      },
      {
        i0: "w",
        i1: "b",
        i2: "w",
        i3: "b",
        i4: "w",
        i5: "b",
        i6: "w",
        i7: "b"
      },
      {
        i0: "b",
        i1: "w",
        i2: "b",
        i3: "w",
        i4: "b",
        i5: "w",
        i6: "b",
        i7: "w"
      },
      {
        i0: "w",
        i1: "b",
        i2: "w",
        i3: "b",
        i4: "w",
        i5: "b",
        i6: "w",
        i7: "b"      
      },
      {
        i0: "b",
        i1: "w",
        i2: "b",
        i3: "w",
        i4: "b",
        i5: "w",
        i6: "b",
        i7: "w"
      },
      {
        i0: "w",
        i1: "b",
        i2: "w",
        i3: "b",
        i4: "w",
        i5: "b",
        i6: "w",
        i7: "b"
      }
    ];
  }
  
}
