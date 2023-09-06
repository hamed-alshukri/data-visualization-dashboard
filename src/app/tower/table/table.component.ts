import { Component } from '@angular/core';
import { TowerService } from '../../service/tower.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  // providers: [TowerService],
})
export class TableComponent {
  // The table should have the following columns:
  // - Tower ID
  // - Operator
  // - Address
  // - Height
  // - Tower Type
  // - Latitude
  // - Longitude
  // - Technology
  //
  // The table should have the following features:
  // - Pagination
  // - Sorting
  // - Filtering
  // - Row selection

  rows: any[] = [];

  constructor(private towerService: TowerService) {}

  ngOnInit() {
    this.towerService.getTowers().subscribe(towers => {
      this.rows = towers;
    });
    // this.rows = this.towerService.getTowers();
  }
}
