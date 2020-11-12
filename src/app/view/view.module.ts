import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { TableComponent } from './table/table.component';
import { BiologyComponent } from './biology/biology.component';
import { BiographyComponent } from './biography/biography.component';
import { PartnersComponent } from './partners/partners.component';


@NgModule({
  declarations: [HomeViewComponent, TableComponent, BiologyComponent, BiographyComponent, PartnersComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
