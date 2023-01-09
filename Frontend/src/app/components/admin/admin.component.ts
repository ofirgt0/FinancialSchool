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
  newClass: Class = {
    currentCurrency: 0,
    teacher: '',
    level: 0,
    name: '',
  };

  constructor(private backendServ: FinancialSchoolBackendAccessService) {
    this.classes$ = this.backendServ.getClasses();
  }

  classes$: Observable<Class[][]>;

  ngOnInit(): void {}

  updateInsertClass(){
    //this.backendServ.postClass()
  }
}
