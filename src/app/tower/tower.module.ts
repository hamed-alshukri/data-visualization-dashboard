import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { GraphComponent } from './graph/graph.component';
import { TowerService } from '../service/tower.service';

@NgModule({
  declarations: [
    TableComponent, //
    GraphComponent,
  ],
  imports: [
    CommonModule, //
  ],
  exports: [
    TableComponent, //
    GraphComponent,
  ],
  providers: [
    TowerService, //
  ],
})
export class TowerModule {}
