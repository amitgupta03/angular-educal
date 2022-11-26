import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../../common/popup/popup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      maxWidth: '70vw',
      maxHeight: '70vh'
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
