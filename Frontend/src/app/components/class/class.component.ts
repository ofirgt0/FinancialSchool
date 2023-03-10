import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChartManagerService } from 'src/app/services/chart-manager.service';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { Class, stock, User, History } from 'src/entities.model';
import { Chart,ChartConfiguration, registerables, DoughnutController } from 'chart.js';
import { ChartTypeRegistry, PieController } from 'chart.js/auto';
import { MatBottomSheet, MatBottomSheetConfig, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ClassCurrencyUpdateBottomSheetComponent } from './class-currency-update-bottom-sheet/class-currency-update-bottom-sheet.component';
Chart.register(DoughnutController);
type chartParams = { data: any; labels: any };

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  chosenClass!: Class;

  classCurrencyHistory: History[] = [];
  myChart: any;
  chart: Chart | undefined;
  doughnutChart!:  Chart<keyof ChartTypeRegistry, (number | null)[]>;
  myChart1: any;
  classId!: string;
  teacherData!: User;

  chartData: number[] = [];
  chartLabels: string[] = [];

  constructor(
    private backend: FinancialSchoolBackendAccessService,
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet
  ) {}

  async ngOnInit(): Promise<void> {
    Chart.register(...registerables);
    this.classId = this.route.snapshot.paramMap.get('classId') + '';
    console.log(this.classId);
    this.backend.getClassById(this.classId).subscribe((classData) => {
      this.chosenClass = classData;
      this.backend.getUser(this.chosenClass.teacherId).subscribe((teacher) => {
        this.teacherData = teacher;
        console.log(teacher);
        this.backend
          .getHistoryByClassId(this.classId)
          .subscribe((classHistory) => {
            this.classCurrencyHistory = classHistory;
            console.log(this.classCurrencyHistory);
            this.chartObjectHandler();
          });
      });
    });
    this.setBarChart();
    this.setDoughnutChart();
  }
  setDoughnutChart() {
    
    const config: ChartConfiguration<'doughnut', number[], string> = {
      type: 'doughnut',
      data: {
        labels: ['Red', 'green'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(117, 222, 128)'
          ]
        }]
      },
      options: {
        animation: {
          animateRotate: true,
          animateScale: false
        }
      }
    };
    
    // create chart instance
    const chart = new Chart('doughnutChart', config);
  }

  setBarChart() {
    const canvas = document.getElementById('barChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx)
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'ינואר',
            'פברואר',
            'מרץ',
            'אפריל',
            'מאי',
            'יוני',
            'יולי',
            'אוגוסט',
            'ספטמבר',
            'אוקטובר',
            'נובמבר',
            'דצמבר',
          ],
          datasets: [
            {
              label: 'הכנסות',
              data: [12, 19, 3, 5, 2, 3, 8],
              backgroundColor: 'rgba(110, 202, 131, 0.5)',
              borderColor: 'rgba(97, 169, 114, 1)',
              borderWidth: 1,
            },
            {
              label: 'הוצאות',
              data: [8, 12, 6, 7, 3, 5, 10],
              backgroundColor: 'rgba(199, 29, 29, 0.5)',
              borderColor: 'rgba(137, 19, 19, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
  }

  setChartDataByHistoryLines() {
    var i = this.classCurrencyHistory.length - 1,
      lastCurrency = this.chosenClass.totalCash;

    this.chartData[this.classCurrencyHistory.length] = lastCurrency;
    this.chartLabels[this.classCurrencyHistory.length] = 'now';
    console.log('this.classCurrencyHistory');
    console.log(this.classCurrencyHistory);
    this.classCurrencyHistory.forEach((classCurrencyHistoryLine) => {
      this.chartData[i] =
        this.chartData[i + 1] - classCurrencyHistoryLine.transactionPrice;
      this.chartLabels[i] = classCurrencyHistoryLine.date;
      i--;
    });
  }

  chartObjectHandler() {
    this.setChartDataByHistoryLines();
    this.myChart = new Chart(this.chosenClass.id, {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            label: this.chosenClass.displayName,
            data: this.chartData,
            fill: false,
            borderColor: '#1F2041',
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }

  openBottomSheet(){
    const config: MatBottomSheetConfig = {
      panelClass: 'my-bottom-sheet'
    };
    this.bottomSheet.open(ClassCurrencyUpdateBottomSheetComponent, config);
  }
}
