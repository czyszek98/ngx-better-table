import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgxBetterTableModule } from "ngx-better-table";

import { PagesModule } from "./pages/pages.module";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { ScrollPositionDirective } from "./theme/directives/scrollPosition.directive";
@NgModule({
  declarations: [AppComponent, ScrollPositionDirective],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgxBetterTableModule,
    PagesModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
