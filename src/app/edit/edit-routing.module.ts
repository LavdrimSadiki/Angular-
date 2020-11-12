import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeEditComponent } from './home-edit/home-edit.component';

const routes: Routes = [
  { path: '', component: HomeEditComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
