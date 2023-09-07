import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TowerService } from '../service/tower.service';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, //
  ],
  exports: [MainComponent],
  providers: [
    TowerService, //
  ],
})
export class TowerModule {}
