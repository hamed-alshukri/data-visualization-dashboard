import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './chart/chart.component';
import { TowerService } from '../service/tower.service';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule, //
  ],
  exports: [ChartComponent],
  providers: [
    TowerService, //
  ],
})
export class TowerModule {}
