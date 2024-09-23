import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "custom-edit-view-examples",
  templateUrl: "./custom-edit-view-examples.component.html",
})
export class CustomViewEditExamplesComponent implements OnInit {
  snippets = {
    customEditorModule: "",
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadSnippets();
  }

  loadSnippets(): void {
    this.http
      .get("assets/snippets/custom-editor-module.md", { responseType: "text" })
      .subscribe((data) => {
        this.snippets.customEditorModule = data;
      });
  }
}
