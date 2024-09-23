import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "filter-examples",
  templateUrl: "./filter-examples.component.html",
})
export class FilterExamplesComponent implements OnInit {
  snippets = {
    sourceRequire: "",
    createSource: "",
    sourceTemplate: "",
    search: "",
    searchTable: "",
    sourceFull: "",
    hideFilters: "",
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get("assets/snippets/source-full.md", { responseType: "text" })
      .subscribe((data) => {
        this.snippets.sourceFull = data;
      });

    this.http
      .get("assets/snippets/hide-filters.md", { responseType: "text" })
      .subscribe((data) => {
        this.snippets.hideFilters = data;
      });
  }
}
