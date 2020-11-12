import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeViewComponent } from './home-view/home-view.component';
import {BiographyComponent } from './biography/biography.component';
import {BiologyComponent } from './biology/biology.component';
import {PartnersComponent} from './partners/partners.component';

const routes: Routes = [{
  path: 'view' ,  component: HomeViewComponent,
  children: [
    {path: '', component: BiographyComponent},
    {path: 'biology', component: BiologyComponent},
    {path: 'partners', component: PartnersComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
