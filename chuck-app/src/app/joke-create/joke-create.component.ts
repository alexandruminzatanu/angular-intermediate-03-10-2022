import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-create',
  templateUrl: './joke-create.component.html',
  styleUrls: ['./joke-create.component.scss']
})
export class JokeCreateComponent implements OnInit {

  joke: string = 'initial text';
  author: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  jokeChange(value:string) {
    console.log(value);
  }

  onSubmit(newJokeForm: any) {
    console.log(newJokeForm);
  }
}
