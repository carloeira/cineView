import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';
import { ListsComponent } from './components/lists/lists.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'filme/:id',
    component: MoviesComponent
  },
  {
    path: 'bombando',
    component: ListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
