import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  searchUrl = environment.searchUrl;
  apiKey = environment.apikey;
  language = environment.language;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  createForm() {
    return this.fb.group({
      search: ['', Validators.required],
    });
  }

  searchMovies(query: string) {
    return this.http.get(
      `${this.searchUrl}${this.apiKey}${this.language}&query=${query.search}`
    );
  }
  
  catch(err: any) {
    console.log(err);
  }
}
