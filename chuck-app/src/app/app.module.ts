import { JokeDetailsModule } from './joke-details/joke-details.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DupicateDirective } from './dupicate.directive';
import { JokeCategoryListComponent } from './joke-category-list/joke-category-list.component';
import { HomeComponent } from './home/home.component';
import { JokeItemComponent } from './joke-item/joke-item.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    DupicateDirective,
    JokeCategoryListComponent,
    HomeComponent,
    JokeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JokeDetailsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
