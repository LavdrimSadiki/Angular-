import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)},
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
