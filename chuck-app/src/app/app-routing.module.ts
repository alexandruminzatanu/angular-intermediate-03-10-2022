import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JokeCategoryListComponent } from './joke-category-list/joke-category-list.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},{
  path: 'categories',
  component: JokeCategoryListComponent
},{
  path:'**',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
