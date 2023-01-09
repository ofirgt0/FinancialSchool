import { Component, OnInit } from '@angular/core';
import { BackendAccessService } from 'src/app/services/BackendAccess.service';
import { Deal, dealler } from 'src/entities.model';
import { Observable } from 'rxjs';
import { DataContainerService } from 'src/app/services/data-container.service';

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

  constructor(private accessService:BackendAccessService,private dataContainer:DataContainerService) { 
    accessService
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
