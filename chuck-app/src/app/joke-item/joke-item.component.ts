import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.scss']
})
export class JokeItemComponent implements OnInit, OnDestroy {
  currentCategory: string = '';
  joke: string = '';
  subs$: Subscription = new Subscription();
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  ngOnDestroy(): void {
   this.subs$.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      this.currentCategory = data.params.id;
      this.getJoke(this.currentCategory);
    })


    this.subs$.add(this.router.events.subscribe((data) => {
      console.log(data);
    }));
  }

  private getJoke(category: string) {
    this.httpClient.get(`https://api.chucknorris.io/jokes/random?category=${category}`).subscribe((data: any) => {
      this.joke = data.value;
    })
  }

}
