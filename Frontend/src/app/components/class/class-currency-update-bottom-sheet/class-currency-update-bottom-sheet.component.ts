import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-class-currency-update-bottom-sheet',
  templateUrl: './class-currency-update-bottom-sheet.component.html',
  styleUrls: ['./class-currency-update-bottom-sheet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClassCurrencyUpdateBottomSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ClassCurrencyUpdateBottomSheetComponent>) { }

  ngOnInit(): void {
  }

}
