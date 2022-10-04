import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DupicateDirective } from './dupicate.directive';
import { JokeCategoryListComponent } from './joke-category-list/joke-category-list.component';
import { HomeComponent } from './home/home.component';
import { JokeItemComponent } from './joke-item/joke-item.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { JokeCreateComponent } from './joke-create/joke-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    DupicateDirective,
    JokeCategoryListComponent,
    HomeComponent,
    JokeItemComponent,
    JokeCreateComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
