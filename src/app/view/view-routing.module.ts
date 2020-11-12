import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeViewComponent } from './home-view/home-view.component';

const routes: Routes = [{
  path: 'view' ,  component: HomeViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
