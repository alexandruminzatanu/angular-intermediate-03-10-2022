import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.scss']
})
export class JokeItemComponent implements OnInit, OnDestroy {
  currentCategory: string = '';
  joke: string = '';
  subs$: Subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, public  chuckApiService: ChuckApiService, private router: Router) { }

  apiHttpService = inject(ChuckApiService);

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

  increase() {
   this.chuckApiService.counter+=1;
  }

  private getJoke(category: string) {

    this.apiHttpService.getJokeFromCategory(category).subscribe((data: any) => {
      this.joke = data.value;
    })
  }

}
