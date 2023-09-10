import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';

import { TowerService } from 'src/app/tower/services/tower.service';

import { MainComponent } from 'src/app/tower/components/main/main.component';
import { TableComponent } from 'src/app/tower/components/table/table.component';
import { ChartComponent } from 'src/app/tower/components/chart/chart.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule, //
    TableComponent,
    ChartComponent,
    MapComponent,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    CommonModule,
  ],
  exports: [MainComponent],
  providers: [
    TowerService, //
  ],
})
export class TowerModule {}
