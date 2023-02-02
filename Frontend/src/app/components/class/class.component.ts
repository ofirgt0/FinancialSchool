import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { ChartManagerService } from 'src/app/services/chart-manager.service';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { Class, stock, User } from 'src/entities.model';
type chartParams = { data: any; labels: any };

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})

export class ClassComponent implements OnInit {
  chosenClass!: Class;
  
  classCurrencyHistory:History[] = [];
  myChart: any;
  classId!: string;
  teacheeData!: User;

  constructor(private backend: FinancialSchoolBackendAccessService, private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    this.classId = this.route.snapshot.paramMap.get('classId') + "";
    console.log(this.classId);
    this.backend.getClassById(this.classId).subscribe(classData => {
      this.chosenClass = classData;
      console.log(this.chosenClass);
      this.backend.getUser(this.chosenClass.teacherId).subscribe(teacher => {
        this.teacheeData = teacher;
        console.log(teacher);
      });

    });
    this.backend.getHistoryByClassId(this.classId).subscribe(classHistory => {
      this.classCurrencyHistory = classHistory;
    });
  }
}