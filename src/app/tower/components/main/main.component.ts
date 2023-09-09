import { Component, OnInit } from '@angular/core';

import { TowerService } from 'src/app/tower/services/tower.service';
import { SharedData } from 'src/app/tower/services/tower.data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(
    private towerService: TowerService,
    public sharedData: SharedData
  ) {}

  ngOnInit() {
    this.towerService.getTowers().subscribe(towers => {
      this.sharedData.init(towers);
    });
  }
}
