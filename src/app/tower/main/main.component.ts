import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { TableComponent } from '../table/table.component';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [
    TableComponent,
    ChartComponent,
    MatIconModule,
    MatButtonToggleModule,
    CommonModule,
  ],
})
export class MainComponent {}
