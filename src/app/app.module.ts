import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchBarComponent } from './components/template/search-bar/search-bar.component';
import { HomeComponent } from './views/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FilmeService } from "./services/filme.service";
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from './views/filmes/filmes.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CarouselComponent,
    FilmesComponent
  ],
  imports: [
    SearchBarComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    NgbModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
