import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
// import { CompleterService } from "ngxcompleter";

import { DefaultFilter } from "./default-filter";
import { distinctUntilChanged, debounceTime, map } from "rxjs/operators";

@Component({
  selector: "completer-filter",
  template: `
    <!-- <ngxcompleter [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().completer.dataService"
                   [minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"
                   [pause]="column.getFilterConfig().completer.pause || 0"
                   [placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"
                   (selected)="completerContent.next($event)">
    </ngxcompleter> -->
    <div>NOT IMPLEMENTED</div>
  `,
})
export class CompleterFilterComponent extends DefaultFilter implements OnInit {
  completerContent = new Subject<any>();

  constructor() {
    super();
  }

  ngOnInit() {
    const config = this.column.getFilterConfig().completer;
    // config.dataService = this.completerService.local(
    //   config.data,
    //   config.searchFields,
    //   config.titleField
    // );
    config.dataService.descriptionField(config.descriptionField);

    this.changesSubscription = this.completerContent
      .pipe(
        map((ev: any) => (ev && ev.title) || ev || ""),
        distinctUntilChanged(),
        debounceTime(this.delay)
      )
      .subscribe((search: string) => {
        this.query = search;
        this.setFilter();
      });
  }

  inputTextChanged(event: string) {
    // workaround to trigger the search event when the home/end buttons are clicked
    // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
    // so here it gets called manually
    if (event === "") {
      this.completerContent.next(event);
    }
  }
}
