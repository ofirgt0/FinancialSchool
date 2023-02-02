import { Component, OnInit } from '@angular/core';
import { dealler } from 'src/entities.model';


@Component({
  selector: 'app-deallers',
  templateUrl: './deallers.component.html',
  styleUrls: ['./deallers.component.css']
})
export class DeallersComponent implements OnInit {

  deallers:dealler[]=[];

  constructor() { }

  async ngOnInit(): Promise<void> {
    // await this.dataContainer.getDeallers().subscribe(resDealler=>{this.deallers=resDealler});
    // setInterval(async () => {
    //   (await this.dataContainer.getDeallers().subscribe(resDealler=>{this.deallers=resDealler}));
      
    // }, 1000);
    }

}
