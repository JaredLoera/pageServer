import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardComponent,
    NavComponent,
    NgxExtendedPdfViewerModule
  ]
})
export class DashboardModule { }
