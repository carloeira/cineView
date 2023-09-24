import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { ResponseApi } from "../components/shared/response-api.model";
import { HandleObservableService } from 'src/app/core/utils/handle-observable-service';


@Injectable({
  providedIn: 'root'
})
export class FilmeService extends HandleObservableService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  private url = environment.api;
  private key = environment.apikey;
  language: string = 'pt-BR';

  obterPopulares(page: number = 1): Observable<ResponseApi> {
    const endPointUrl = `${this.url}/movie/popular${this.key}&language=${this.language}&page=${page}`;
    return this.httpClient
      .get<ResponseApi>(endPointUrl)
      .pipe(
        retry(2),
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  obterBanner(page: number = 1): Observable<ResponseApi> {
    const endPointUrl = `${this.url}/trending/all/week${this.key}&language=${this.language}&page=${page}`;
    return this.httpClient
      .get<ResponseApi>(endPointUrl)
      .pipe(
        retry(2),
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  obterProximos(page: number = 1): Observable<ResponseApi> {
    const endPointUrl = `${this.url}/movie/upcoming${this.key}&language=${this.language}&page=${page}`;
    return this.httpClient
      .get<ResponseApi>(endPointUrl)
      .pipe(
        retry(2),
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  maisAssistidos(page: number = 1): Observable<ResponseApi> {
    const endPointUrl = `${this.url}/movie/top_rated${this.key}&language=${this.language}&page=${page}`;
    return this.httpClient
      .get<ResponseApi>(endPointUrl)
      .pipe(
        retry(2),
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

}
