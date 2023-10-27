import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FilmeService } from "src/app/services/filme.service";
import { AppStore } from 'src/app/store/app.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  banners: any

  constructor(
    private store: AppStore,
    private router: Router,
    private service: FilmeService,
    config: NgbCarouselConfig
    ) {
      config.interval = 2000;
      config.keyboard = true;
      config.pauseOnHover = true;
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
    this.service.obterBanner()
    .subscribe((res) => {
      this.banners = res.results
    })
  }

  initialiceSearch() {
    this.store.state$.subscribe((res) => {
      if (res.search) {
        this.banners = res.search;
      }
    });
  }

  openMovieDetails(index: number) {
    this.store.saveMovieSelected(this.banners[index]);
    this.router.navigate(['/movie/:id']);
  }
}
