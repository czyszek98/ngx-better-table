import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "demo",
  templateUrl: "./demo.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
  install = 0;
  snippets = {
    install: "1",
    require: `${this.install}`,
    directive: "3",
    settings: "4",
    template: "5",
    array: "6",
    dataTemplate: "7",
    basicFull: "8",
  };

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadSnippets();
  }

  loadSnippets(): void {
    this.http
      .get("assets/snippets/install.md", { responseType: "text" })
      .subscribe(
        (data) => {
          this.install++;
          console.log("jest ok: ", this.install);
        },
        (err) => {
          console.log("ERRORRO");
        }
      );

    this.http
      .get("assets/snippets/require.md", { responseType: "text" })
      .subscribe((data) => (this.snippets.require = data));

    this.http
      .get("assets/snippets/directive.md", { responseType: "text" })
      .subscribe((data) => (this.snippets.directive = data));

    this.http
      .get("assets/snippets/settings.md", { responseType: "text" })
      .subscribe((data) => (this.snippets.settings = data));

    this.http
      .get("assets/snippets/template.md", { responseType: "text" })
      .subscribe((data) => (this.snippets.template = data));

    this.http
      .get("assets/snippets/array.md", { responseType: "text" })
      .subscribe((data) => (this.snippets.array = data));

    this.http
      .get("assets/snippets/data-template.md", { responseType: "text" })
      .subscribe((data) => (this.snippets.dataTemplate = data));

    this.http
      .get("assets/snippets/basic-full.md", { responseType: "text" })
      .subscribe((data) => (this.snippets.basicFull = data));
  }
}
