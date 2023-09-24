import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie.model';
import { AppStore } from 'src/app/store/app.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private store: AppStore, private router: Router) {}
  catch(err: any) {
    console.log(err);
  }

  ngOnInit(): void {
    this.store.state$.subscribe((res) => {
      if (res.flag) {
        this.initialiceSearch();
      } else {
        this.initialice();
      }
    });
  }

  initialice() {
    this.store.state$.subscribe((res) => {
      this.movies = res.movies;
    });
  }

  initialiceSearch() {
    this.store.state$.subscribe((res) => {
      if (res.search) {
        this.movies = res.search;
      } 
    });
  }

  openMovieDetails(index: number) {
    this.store.saveMovieSelected(this.movies[index]);
    this.router.navigate(['/movie/:id']);
  }
}
