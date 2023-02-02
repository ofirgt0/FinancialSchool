import { Component, OnInit } from '@angular/core';
import { HoldingsWorth, stockWithAmount } from 'src/entities.model';

@Component({
  selector: 'app-holdings-view',
  templateUrl: './holdings-view.component.html',
  styleUrls: ['./holdings-view.component.css']
})
export class HoldingsViewComponent implements OnInit {

  
  deallerHoldings!:HoldingsWorth;
  stocksWithAmount!:stockWithAmount[];
  constructor() { 
    
  }

  async ngOnInit(): Promise<void> {    
    
        
  }

}
