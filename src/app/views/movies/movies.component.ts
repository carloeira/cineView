import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/components/shared/movie.model';
import { FilmeService } from 'src/app/services/filme.service';
import { SingleMovieService } from 'src/app/services/single-movie/single-movie.service';
import { AppStore } from 'src/app/store/app.store';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  cast!: any[];
  movie!: Movie;
  constructor(
    private store: AppStore,
    private router: Router,
    private singleMovie: SingleMovieService,
    private filmeService: FilmeService,
    private config: NgbRatingConfig
  ) {
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.initialice();
  }

  initialice() {
    this.store.state$.subscribe((res) => {
      let movie = res.movieSelected;
      if (movie == null) {
        this.router.navigate(['/']);
      } else {
        this.singleMovie.getMovieDetails(movie.id).subscribe((data: any) => {
          this.movie = data;
          this.movie.poster_path = `${environment.imageUrl}${this.movie.poster_path}`;
        });
        this.singleMovie.getCast(movie.id).subscribe((data: any) => {
          this.cast = Array.from(data.cast);
          this.cast = this.cast.filter((c) => c.profile_path != null);
          this.cast.forEach((c) => {
            c.profile_path = `${environment.imageUrl}${c.profile_path}`;
          });
        });
      }
    });
  }
  catch(err: any) {
    console.log(err);
  }

  navigateBack() {
    if (this.store.flag$) {
      this.store.deleteMovies();
      this.store.switchFlag(false);
    }
    this.router.navigate(['/']);
  }
}
