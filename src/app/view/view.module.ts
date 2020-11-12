import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [HomeViewComponent, TableComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
