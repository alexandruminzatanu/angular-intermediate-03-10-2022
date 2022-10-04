import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChuckApiService } from './chuck-api.service';

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

  constructor(private router: Router, private chuckApiService: ChuckApiService) {}

  ngOnInit(): void {
    setTimeout(()=>{
      this.joke = 'new value';
    }, 5000);
  }

  buttonClicked(value: string) {
    console.log(value);
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  notify() {
    this.counter+=1;
    this.chuckApiService.notifyMe.next(this.counter);
  }

  showCardClicked(){
    //this.counter++;
    this.showCard = true;
  }
}
