import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckApiService {

  counter: number = 1;

  notifyMe: Subject<number> = new Subject<number>();

  constructor(private httpClient: HttpClient) { }


  getJokeFromCategory(category: string): Observable<any> {
    return this.httpClient.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
  }

  getJokeCategories(): Observable<string[]> {
    return  this.httpClient.get<string[]>('https://api.chucknorris.io/jokes/categories');
  }

}
