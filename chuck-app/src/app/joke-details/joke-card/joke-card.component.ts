import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit, OnChanges {
  @Input() joke: string = 'some string';
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();

  today: Date = new Date();
  cardContent = {
    title: 'Chuck joke',
    content: 'Chuck Norris made a set of boxing speed bags out of Abe Vigodas earlobes'
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.joke);
    console.log('component initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  likeClicked() {
    this.buttonClicked.emit('like clicked');
  }

}
