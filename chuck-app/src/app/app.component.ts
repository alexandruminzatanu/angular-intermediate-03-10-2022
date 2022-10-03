import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter: number = 0;



  joke: string = 'hello';
  showCard: boolean = false;

  jokes: string[] = ['joke1', 'joke2', 'joke3'];

  ngOnInit(): void {
    setTimeout(()=>{
      this.joke = 'new value';
    }, 5000);
  }

  buttonClicked(value: string) {
    console.log(value);
  }

  showCardClicked(){
    //this.counter++;
    this.showCard = true;
  }
}
