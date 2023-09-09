import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';

import { Tower } from 'src/app/tower/types/tower.type';
import { SharedData } from 'src/app/tower/services/tower.data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [
    MatTableModule, //
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    CommonModule,
  ],
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
    private _liveAnnouncer: LiveAnnouncer,
    private sharedData: SharedData
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.sharedData.value.subscribe(towers => {
      this.dataSource.data = towers;
    });
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

  getColumnName(columnName: string) {
    return columnName
      .replace(/_/g, ' ')
      .replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1));
  }

  getChipColor(item: any, type: keyof Tower) {
    const towerBadgeColor: Record<string, string> = {
      default: 'badge-default',
      gtower: 'badge-info',
      tower: 'badge-success',
      ltower: 'badge-danger',
      mtower: 'badge-warning',
    };

    const technologyBadgeColors: Record<string, string> = {
      default: 'badge-default',
      '2g': 'badge-info',
      '3g': 'badge-success',
      '4g': 'badge-danger',
      '5g': 'badge-warning',
    };

    const itemType = item?.toLowerCase();

    if (type === 'tower_type') return towerBadgeColor[itemType] ?? 'default';
    else return technologyBadgeColors[itemType] ?? 'default';
  }
}
