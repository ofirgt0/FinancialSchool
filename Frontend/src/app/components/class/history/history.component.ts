import { Component, OnInit } from '@angular/core';
import { History } from 'src/entities.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  historyLines:History[] = [{
    id: 1,
    classId:'b3',
    date: '09/02/2023 22:43:40',
    productId:'הפסקה פעילה',
    transactionPrice: 39
  },{
    id: 2,
    classId:'b3',
    date: '09/02/2023 22:44:40',
    productId:'אימון גופני',
    transactionPrice: 10
  },{
    id: 3,
    classId:'b3',
    date: '09/02/2023 22:44:40',
    productId:'פרס טוב',
    transactionPrice: 20
  },{
    id: 4,
    classId:'b3',
    date: '09/02/2023 22:44:40',
    productId:'יום כיף',
    transactionPrice: 10
  },{
    id: 4,
    classId:'b3',
    date: '09/02/2023 22:44:40',
    productId:'יום כיף',
    transactionPrice: 10
  },{
    id: 4,
    classId:'b3',
    date: '09/02/2023 22:44:40',
    productId:'יום כיף',
    transactionPrice: 10
  }]

  ngOnInit(): void {
  }

}
