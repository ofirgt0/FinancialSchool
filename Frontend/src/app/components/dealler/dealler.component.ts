import { Component, OnInit } from '@angular/core';
import { Deal, dealler } from 'src/entities.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dealler',
  templateUrl: './dealler.component.html',
  styleUrls: ['./dealler.component.css']
})
export class DeallerComponent implements OnInit {
  deallerObs!: Observable<dealler>;
  dealler!: dealler;
  deallerDeals:Deal[]=[];
  noDeals=false;
  historyView=true;

  constructor() { 
  }

  async ngOnInit(): Promise<void> {    
    // await this.dataContainer.getLogedDealler().subscribe(resDealler=>{this.dealler=resDealler});
    // await this.dataContainer.getLogedInDeallerDeals().subscribe(resDeallerDeals=>{this.deallerDeals=resDeallerDeals;});
    
    // setInterval(async () => {this.noDeals=(this.deallerDeals.length==0)}, 1000);
    
  }
  showDeals(currStatus:boolean)
  {
    this.historyView=currStatus;
  }

}
