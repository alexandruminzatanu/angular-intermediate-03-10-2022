import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';

@Component({
  selector: 'app-joke-category-list',
  templateUrl: './joke-category-list.component.html',
  styleUrls: ['./joke-category-list.component.scss']
})
export class JokeCategoryListComponent implements OnInit {

  constructor(public chuckApiService: ChuckApiService, private router: Router) { }
  categories: any[] = [];

  ngOnInit(): void {
    this.chuckApiService.getJokeCategories().subscribe((data: string[])=>{
      this.categories = data;
    });


    this.chuckApiService.notifyMe.pipe(
      map(val => val * 2)
    ).subscribe((data: number)=>{
      console.info(data);
    });
  }

  goToCategory(category: string) {
     this.router.navigate([`/category/${category}`]);
  }

}
