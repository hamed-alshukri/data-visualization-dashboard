import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TowerService } from '../service/tower.service';
import { MainComponent } from './main/main.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule, //
    TableComponent,
    ChartComponent,
    MatIconModule,
    MatButtonToggleModule,
    CommonModule,
  ],
  exports: [MainComponent],
  providers: [
    TowerService, //
  ],
})
export class TowerModule {}
