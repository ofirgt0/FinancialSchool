import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { Class } from 'src/entities.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  // newClass: Class = {
  //   id:'',
  //   currentCurrency: 0,
  //   teacher: '',
  //   level: 0,
  //   displayName: '',
  //   currencyDifference: [2,4,5,7,-3,1,-11,2]
  // };

  constructor(private backendServ: FinancialSchoolBackendAccessService) {
    this.classes$ = this.backendServ.getClasses();
  }

  classes$: Observable<Class[]>;

  ngOnInit(): void {}

  updateInsertClass(){
    //this.backendServ.postClass()
  }
}
