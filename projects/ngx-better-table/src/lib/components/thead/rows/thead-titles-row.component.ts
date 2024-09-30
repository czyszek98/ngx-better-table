import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from "@angular/core";

import { Grid } from "../../../lib/grid";
import { DataSource } from "../../../lib/data-source/data-source";
import { Column } from "../../../lib/data-set/column";

@Component({
  selector: "[ngxst-thead-titles-row]",
  template: `
    <th
      ngxst-checkbox-select-all
      *ngIf="isMultiSelectVisible"
      [grid]="grid"
      [source]="source"
      [isAllSelected]="isAllSelected"
      (click)="selectAllRows.emit($event)"
    ></th>
    <th ngxst-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th
      *ngFor="let column of getVisibleColumns(grid.getColumns())"
      class="ngx-better-th {{ column.id }}"
      [ngClass]="column.class"
      [style.width]="column.width"
    >
      <ngxst-column-title
        [source]="source"
        [column]="column"
        (sort)="sort.emit($event)"
      ></ngxst-column-title>
    </th>
    <th ngxst-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `,
})
export class TheadTitlesRowComponent implements OnChanges {
  @Input() grid: Grid;
  @Input() isAllSelected: boolean;
  @Input() source: DataSource;

  @Output() sort = new EventEmitter<any>();
  @Output() selectAllRows = new EventEmitter<any>();

  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn("left");
    this.showActionColumnRight = this.grid.showActionColumn("right");
  }

  getVisibleColumns(columns: Array<Column>): Array<Column> {
    return (columns || []).filter((column: Column) => !column.hide);
  }
}
