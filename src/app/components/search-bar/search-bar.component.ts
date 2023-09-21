
import {Component, ElementRef, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [FormsModule, MatAutocompleteModule, ReactiveFormsModule, NgFor, AsyncPipe],
})
export class SearchBarComponent implements OnInit {

  constructor(
    private service: FilmeService,
    private element: ElementRef
    ) {}

    movies: string[] = ['Prometheus', 'One Piece', 'Hereditário', 'Jogos Vorazes'];
    filteredMovies!: Observable<string[]>;

    control = new FormControl('');
    search: any = new FormGroup({
      'filmeEncontrado': new FormControl(null),
    });

    pageNumber: number = 1
    totalPages: number = 1
    searchRes: any;
    selectedGenreId: any;
    searchByGenerID: any;

    submit() {
      const searchForm = this.search.get('filmeEncontrado')?.value
      localStorage.setItem('last', searchForm + '')
      this.performSearch()
    }

    performSearch() {
      const searchForm = this.search.get('filmeEncontrado')?.value
      localStorage.setItem('last', searchForm + '')

      if (this.selectedGenreId) {
        this.resultsByIdGenres(this.selectedGenreId);
      } else {
        this.service.procurarFilmes(this.search.value, this.pageNumber).subscribe((result) => {
          console.log(result, 'searchForm#');
          this.searchRes = result.results;
          this.totalPages = result.total_pages;
        });
      }
    }

    resultsByIdGenres(id: number) {
      this.selectedGenreId = id;
      this.service.procurarGenero(id, this.pageNumber).subscribe((result) => {
        this.searchByGenerID = result.results;
        this.totalPages = result.total_pages;
      });
    }

    objectSearch() {
      this.element.nativeElement.querySelector('inputFilme').focus()
    }

    ngOnInit(): void {
      this.filteredMovies = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
      );

    }

    private _filter(value: string): string[] {
      const filterValue = this._normalizeValue(value);
      return this.movies.filter(filme => this._normalizeValue(filme).includes(filterValue));
    }

    private _normalizeValue(value: string): string {
      return value.toLowerCase().replace(/\s/g, '');
    }
}
