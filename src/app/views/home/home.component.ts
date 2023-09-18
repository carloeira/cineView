import { Component, OnInit } from '@angular/core';
import { FilmeService } from "src/app/services/filme.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: FilmeService) {}

  ngOnInit(): void {
    this.filmesPopularesData()
    this.filmesProximosData()
  }

  filmesPopulares: any = []
  filmesProximos: any = []

  filmesPopularesData() {
    this.service.obterPopulares().subscribe((res) => {
      this.filmesPopulares = res.results
    })
  }

  filmesProximosData() {
    this.service.obterProximos().subscribe((res) => {
      this.filmesProximos = res.results
    })
  }
}
