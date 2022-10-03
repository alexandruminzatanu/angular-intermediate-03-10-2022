import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit {
  joke:string = 'some string';
  today: Date = new Date();
  cardContent = {
    title: 'some title',
    content: 'joke content'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
