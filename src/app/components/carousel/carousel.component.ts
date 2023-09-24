import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FilmeService } from "src/app/services/filme.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(
    private service: FilmeService,
    config: NgbCarouselConfig
    ) {
      config.interval = 2000;
      config.keyboard = true;
      config.pauseOnHover = true;
    }

  ngOnInit(): void {
    this.fullBanner()
  }

  banners: any = []

  fullBanner() {
    this.service.obterBanner()
    .subscribe((banner) => {
      this.banners = banner.results
    })
  }
}
