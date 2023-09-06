import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphComponent } from './graph/graph.component';
import { TowerService } from '../service/tower.service';

@NgModule({
  declarations: [GraphComponent],
  imports: [
    CommonModule, //
  ],
  exports: [GraphComponent],
  providers: [
    TowerService, //
  ],
})
export class TowerModule {}
