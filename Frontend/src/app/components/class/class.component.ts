import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { BackendAccessService } from 'src/app/services/BackendAccess.service';
import { ChartManagerService } from 'src/app/services/chart-manager.service';
import { DataContainerService } from 'src/app/services/data-container.service';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { Class, stock } from 'src/entities.model';
type chartParams = { data: any; labels: any };

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})

export class ClassComponent implements OnInit {
  chosenClass!: Observable<Class>;

  classCurrencyHistory:number[] = [];
  myChart: any;

  // @Input() classId: string = "";
  classId: string = "";

  constructor(
    private accessService: FinancialSchoolBackendAccessService,
  ) {}

  async ngOnInit(): Promise<void> {
    
  }
}