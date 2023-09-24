import { Component, OnInit, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../shared/movie.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [NgbRatingConfig],
})
export class CardComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() index: number = 0;
  constructor(private config: NgbRatingConfig) {
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit(): void {}
}
