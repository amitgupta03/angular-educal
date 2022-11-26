import { Component, OnInit } from '@angular/core';
import {MatSnackBar,   MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  openSnackBar(message: string, action: string) {
   setTimeout(()=>{
    this._snackBar.open(message, action,{
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
   },3000)
  }
}
