import { Component } from "@angular/core";

import { LocalDataSource } from "ngx-better-table";
import { BasicExampleLoadService } from "./basic-example-load.service";

@Component({
  selector: "basic-example-load",
  providers: [BasicExampleLoadService],
  template: `
    <ngx-better-table
      [settings]="settings"
      [source]="source"
    ></ngx-better-table>
  `,
})
export class BasicExampleLoadComponent {
  source: LocalDataSource;

  settings = {
    columns: {
      id: {
        title: "ID",
        editable: false,
        addable: false,
      },

      name: {
        title: "Full Name",
      },
      username: {
        title: "User Name",
      },
      email: {
        title: "Email",
      },
    },
  };

  constructor(protected service: BasicExampleLoadService) {
    this.source = new LocalDataSource();

    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }
}
