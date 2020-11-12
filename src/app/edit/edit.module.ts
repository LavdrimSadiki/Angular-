import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { HomeEditComponent } from './home-edit/home-edit.component';


@NgModule({
  declarations: [HomeEditComponent],
  exports: [
    HomeEditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
