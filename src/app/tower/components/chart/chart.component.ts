import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent as ApexChartComponent,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';

import { Tower } from 'src/app/tower/types/tower.type';
import { SharedData } from 'src/app/tower/services/tower.data';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule],
})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chart: ApexChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private sharedData: SharedData) {
    this.chartOptions = {
      chart: {
        width: 380,
        type: 'pie',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
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
}
