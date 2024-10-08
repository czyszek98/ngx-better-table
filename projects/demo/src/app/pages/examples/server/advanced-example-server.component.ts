import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServerDataSource } from "ngx-better-table";

@Component({
  selector: "advanced-example-server",
  template: `
    <ngx-better-table
      [settings]="settings"
      [source]="source"
    ></ngx-better-table>
  `,
})
export class AdvancedExampleServerComponent {
  settings = {
    columns: {
      id: {
        title: "ID",
      },
      albumId: {
        title: "Album",
      },
      title: {
        title: "Title",
      },
      url: {
        title: "Url",
      },
    },
  };

  source: ServerDataSource;

  constructor(http: HttpClient) {
    this.source = new ServerDataSource(http, {
      endPoint: "https://jsonplaceholder.typicode.com/photos",
    });
  }
}
