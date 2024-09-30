import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  OnChanges,
} from "@angular/core";

import { Grid } from "../../../lib/grid";

@Component({
  selector: "[ngx-st-actions-title]",
  template: ` <div class="ngx-better-title">{{ actionsColumnTitle }}</div> `,
})
export class ActionsTitleComponent implements AfterViewInit, OnChanges {
  @Input() grid: Grid;

  actionsColumnTitle: string;

  constructor(private ref: ElementRef) {}

  ngAfterViewInit() {
    this.ref.nativeElement.classList.add("ngx-better-actions");
  }

  ngOnChanges() {
    this.actionsColumnTitle = this.grid.getSetting("actions.columnTitle");
  }
}
