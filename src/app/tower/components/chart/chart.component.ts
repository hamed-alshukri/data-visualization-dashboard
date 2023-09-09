import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent as ApexChartComponent,
  ApexNonAxisChartSeries,
  ApexChart,
  NgApexchartsModule,
} from 'ng-apexcharts';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
  imports: [NgApexchartsModule, MatFormFieldModule, MatInputModule],
})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chart: ApexChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private sharedData: SharedData) {
    this.chartOptions = {
      chart: {
        width: '100%',
        height: 400,
        type: 'donut',
      },
    };
  }

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
      const groupedData = this.groupByData(towers, 'technology');

      this.chartOptions.labels = Object.keys(groupedData);
      this.chartOptions.series = Object.values(groupedData).map(
        (group: Tower[]) => group.length
      );
    });
  }

  applyFilter(event: Event) {}
}
