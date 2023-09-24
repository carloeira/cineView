import { Component } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {

  constructor(private service: FilmeService) {}

  ngOnInit(): void {
    this.filmesPopularesData()
    this.filmesProximosData()
    this.maisAssistidosData()
  }

  filmesPopulares: any = []
  filmesProximos: any = []
  maisAssistidos: any = []

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

  maisAssistidosData() {
    this.service.maisAssistidos().subscribe((res) => {
      this.maisAssistidos = res.results
    })
  }

}
