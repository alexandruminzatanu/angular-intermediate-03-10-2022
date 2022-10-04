import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joke-category-list',
  templateUrl: './joke-category-list.component.html',
  styleUrls: ['./joke-category-list.component.scss']
})
export class JokeCategoryListComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }
  categories: any[] = [];
  ngOnInit(): void {
    this.httpClient.get('https://api.chucknorris.io/jokes/categories')
    .subscribe((data: any)=>{
      this.categories = data;
    })
  }

  goToCategory(category: string) {
     this.router.navigate([`/category/${category}`]);
  }

}
