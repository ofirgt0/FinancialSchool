import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
//import Chart from 'chart.js/auto';

import { ChartManagerService } from 'src/app/services/chart-manager.service';
import { FinancialSchoolBackendAccessService } from 'src/app/services/financial-school-backend-access.service';
import { Class, stock } from 'src/entities.model';

type chartParams = { data: any; labels: any };
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {

  stockNameToShow: string = 'Apple';
  myChart: any;

  @Input() graphValues: number[] = [];
  @Input() label: string = '';
  @Input() classId: string = 'a1';

  colorsSet = [
    '#1F2041',
    '#4B3F72',
    '#FFC857',
    '#119DA4',
    '#19647E',
    '#588157',
    '#3A5A40',
    '#C03221',
    '#f7f7ff',
    '#5AD8CE',
    '#3F826D',
  ];

  constructor(
    private backendAccessService: FinancialSchoolBackendAccessService,
    private chartService: ChartManagerService
  ) {}

  async ngOnInit(): Promise<void> {
    this.chartHandlerAsync();
  }

  async chartHandlerAsync() {
    this.myChart = new Chart(this.classId, {
      type: 'line',
      data: this.initChartObject(this.classId),
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }

  initChartObject(classId: string) {
    var chartData = this.chartDataHandler();
    const stockData = {
      labels: chartData.labels,
      datasets: [{
        label: classId,
        data: chartData.data,
        fill: false,
        borderColor: this.colorsSet[1],
        tension: 0.1,
      }]
    };
    return stockData;
  }

  chartDataHandler(): chartParams {
    const data = [];
    const labels = [];
    for (var i = this.graphValues.length - 1; i > 0; i--) {
      labels[i] = this.label + i;
      data[i] = this.graphValues;
    }
    return { data, labels };
  }
}
