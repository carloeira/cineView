import { Component, OnInit } from '@angular/core';
import { FilmeService } from "src/app/services/filme.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private service: FilmeService) {}

  ngOnInit(): void {
    this.fullBanner()
  }

  banners: any = []

  fullBanner() {
    this.service.obterPopulares()
    .subscribe((banner) => {
      this.banners = banner.results
    })
}
}
