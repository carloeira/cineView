import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from 'src/app/services/filme.service';
import { AppStore } from 'src/app/store/app.store';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  filmesPopulares: any = []
  filmesProximos: any = []
  maisAssistidos: any = []

  constructor(
    private store: AppStore,
    private router: Router,
    private service: FilmeService) {}

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
    this.service.obterPopulares()
    .subscribe((res) => {
      this.filmesPopulares = res.results
    });

    this.service.obterProximos()
    .subscribe((res) => {
      this.filmesProximos = res.results
    });

    this.service.maisAssistidos()
    .subscribe((res) => {
      this.maisAssistidos = res.results
    });

  }

  initialiceSearch() {
    this.store.state$.subscribe((res) => {
      if (res.search) {
        this.filmesPopulares = res.search;
        this.filmesProximos = res.search;
        this.maisAssistidos = res.search;
      }
    });
  }

  openMovieDetails(index: number) {
    this.store.saveMovieSelected(this.filmesPopulares[index]);
    console.log(this.filmesPopulares)
    this.router.navigate(['/movie/:id']);

    this.store.saveMovieSelected(this.filmesProximos[index]);
    console.log(this.filmesProximos)
    this.router.navigate(['/movie/:id']);

    this.store.saveMovieSelected(this.maisAssistidos[index]);
    console.log(this.maisAssistidos)
    this.router.navigate(['/movie/:id']);
  }
}
