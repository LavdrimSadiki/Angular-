import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ViewModule } from './view/view.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import {EditModule} from './edit/edit.module';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        ViewModule,
        AppRoutingModule,
        EditModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
