import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeDetailsRoutingModule } from './joke-details-routing.module';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { SuffixPipe } from './suffix.pipe';


@NgModule({
  declarations: [
    JokeCardComponent,
    SuffixPipe
  ],
  imports: [
    CommonModule,
    JokeDetailsRoutingModule
  ],
  exports: [
    JokeCardComponent
  ]
})
export class JokeDetailsModule { }
