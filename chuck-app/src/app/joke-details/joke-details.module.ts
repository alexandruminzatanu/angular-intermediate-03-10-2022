import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeDetailsRoutingModule } from './joke-details-routing.module';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { SuffixPipe } from './suffix.pipe';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { JokeTitleComponent } from './joke-title/joke-title.component';


@NgModule({
  declarations: [
    JokeCardComponent,
    SuffixPipe,
    JokeTitleComponent
  ],
  imports: [
    CommonModule,
    JokeDetailsRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    JokeCardComponent
  ]
})
export class JokeDetailsModule { }
