import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MoviesComponent } from './views/movies/movies.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResultsComponent } from './components/results/results.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CardComponent } from './components/card/card.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { SearchComponent } from './components/search/search.component';
import { ListsComponent } from './components/lists/lists.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    CarouselComponent,
    MoviesComponent,
    ResultsComponent,
    MoviesListComponent,
    CardComponent,
    SingleMovieComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
