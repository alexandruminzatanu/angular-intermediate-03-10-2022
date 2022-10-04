import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.scss']
})
export class JokeItemComponent implements OnInit {
  currentCategory: string = '';
  joke: string = '';
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      this.currentCategory = data.params.id;
      this.getJoke(this.currentCategory);
    })
  }

  private getJoke(category: string) {
    this.httpClient.get(`https://api.chucknorris.io/jokes/random?category=${category}`).subscribe((data: any) => {
      this.joke = data.value;
    })
  }

}
