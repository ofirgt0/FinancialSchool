import { Component, OnInit } from '@angular/core';
import { Deal, dealler } from 'src/entities.model';

@Component({
  selector: 'app-deals-view',
  templateUrl: './deals-view.component.html',
  styleUrls: ['./deals-view.component.css']
})
export class DealsViewComponent implements OnInit {

  dealler!: dealler;
  deallerDeals:Deal[]=[];
  noDeals=false;
  constructor() { 
  }

  async ngOnInit(): Promise<void> {    
  }
}
