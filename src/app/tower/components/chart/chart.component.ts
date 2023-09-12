import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import {
  ChartComponent as ApexChartComponent,
  ApexNonAxisChartSeries,
  ApexChart,
  NgApexchartsModule,
} from 'ng-apexcharts';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';

import { Tower } from 'src/app/tower/types/tower.type';
import { SharedData } from 'src/app/tower/services/tower.data';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    // ApexCharts modules
    NgApexchartsModule,

    // Material modules
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chart: ApexChartComponent;
  public chartOptions: Partial<ChartOptions>;

  selected: keyof Tower = 'technology';
  towerData: Tower[] = [];

  constructor(private sharedData: SharedData) {
    this.chartOptions = {
      chart: {
        width: '100%',
        height: 400,
        type: 'donut',
      },
    };
  }

  // Group data by key
  groupByData(records: Tower[], key: keyof Tower) {
    return records.reduce((group: Record<string, Tower[]>, data) => {
      const keyData: string | number = data[key];
      group[keyData] = group[keyData] ?? [];
      group[keyData].push(data);
      return group;
    }, {});
  }

  ngOnInit() {
    this.sharedData.value.subscribe(towers => {
      this.towerData = towers;

      this.setChartData(towers);
    });
  }

  // Set chart data
  setChartData(data: Tower[], key: keyof Tower = this.selected) {
    const groupedData = this.groupByData(data, key);

    this.chartOptions.labels = Object.keys(groupedData);
    this.chartOptions.series = Object.values(groupedData).map(
      (group: Tower[]) => group.length
    );
  }

  // Change chart type and set chart data accordingly
  changeChartType(event: MatSelectChange) {
    const selectValue = event.value as keyof Tower;
    this.selected = selectValue;
    this.setChartData(this.towerData, selectValue);
  }
}
