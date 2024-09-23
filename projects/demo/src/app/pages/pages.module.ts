import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routes } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({ imports: [FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        Ng2SmartTableModule,
        SharedModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class PagesModule {
}
