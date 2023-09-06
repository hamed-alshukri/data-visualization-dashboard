import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';

import { TowerService } from '../../service/tower.service';
import { Tower } from '../../types/tower.type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  // providers: [TowerService],
})
export class TableComponent implements OnInit, AfterViewInit {
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

  // dataSource: Tower[] = [];

  dataSource = new MatTableDataSource<Tower>([]);

  displayedColumns: string[] = [
    'tower_id',
    'operator',
    'address',
    'height',
    'tower_type',
    'latitude',
    'longitude',
    'technology',
  ];

  constructor(
    private towerService: TowerService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.towerService.getTowers().subscribe(towers => {
      this.dataSource.data = towers;
    });
    // this.dataSource = this.towerService.getTowers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
