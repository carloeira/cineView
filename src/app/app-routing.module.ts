import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FilmesComponent } from './views/filmes/filmes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'filmes',
    component: FilmesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
