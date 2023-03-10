import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum DatePart{
  day,
  month,
  year
}

@Injectable({
  providedIn: 'root'
})
export class ChartManagerService {
  historyData: number[][] = [];
  stockNameToShowSubscription: BehaviorSubject<string>;
  
  constructor() { 
    this.stockNameToShowSubscription = new BehaviorSubject<string>("Apple");
  }

  getStockNameValue(): Observable<string> {
    return this.stockNameToShowSubscription.asObservable();
  }
  setStockNameValue(newValue: string): void {
    this.stockNameToShowSubscription.next(newValue);
  }

  getClasscurrencyHistory(classId: string)
  {
  }

  getDatePartNumberByDateString(date: string, part: DatePart)
  {
    return date.split('.')[part]; 
  }



}
