import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent as ApexChartComponent,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';

import { TowerService } from '../../service/tower.service';
import { Tower } from '../../types/tower.type';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  standalone: true,
  imports: [NgApexchartsModule],
})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chart: ApexChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private towerService: TowerService) {
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

  ngOnInit() {
    this.towerService.getTowers().subscribe(towers => {
      const groupedData = towers.reduce(
        (group: Record<string, Tower[]>, data) => {
          const { technology } = data;
          group[technology] = group[technology] ?? [];
          group[technology].push(data);
          return group;
        },
        {}
      );

      console.log('group', groupedData);
      this.chartOptions.labels = Object.keys(groupedData);
      this.chartOptions.series = Object.values(groupedData).map(
        (group: Tower[]) => group.length
      );
    });
  }
}
