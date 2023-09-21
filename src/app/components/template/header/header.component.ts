import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.service.headerData.title
  }

  get routeUrl(): string {
    return this.service.headerData.routeUrl
  }

}
