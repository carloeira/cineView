import { Component } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor(private service: FilmeService) {}

  getDetalhesRes: any;

  getDetalhes(id: any) {
    this.service.obterDetalhes(id).subscribe((res) => {
      this.getDetalhesRes = res
    })
  }

}
