import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SearchBarComponent } from './components/template/search-bar/search-bar.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'search', component:SearchBarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
