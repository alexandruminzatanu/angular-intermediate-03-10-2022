import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { JokeCategoryListComponent } from './joke-category-list/joke-category-list.component';
import { JokeItemComponent } from './joke-item/joke-item.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'categories',
  component: JokeCategoryListComponent
}, {
  path: 'category/:id',
  component: JokeItemComponent,
  canActivate: [AuthGuard]
}, {
  path: 'details',
  loadChildren: () => import('./joke-details/joke-details.module').then(m => m.JokeDetailsModule)
}, {
  path: '**',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
