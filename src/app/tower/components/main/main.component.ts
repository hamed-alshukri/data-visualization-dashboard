import { Component, OnInit } from '@angular/core';

import { TowerService } from 'src/app/tower/services/tower.service';
import { SharedData } from 'src/app/tower/services/tower.data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    private towerService: TowerService,
    public sharedData: SharedData
  ) {}

  ngOnInit() {
    // Get towers from the API
    this.towerService.getTowers().subscribe(towers => {
      this.sharedData.init(towers);
    });
  }
}
