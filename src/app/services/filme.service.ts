import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { ResponseApi } from "../components/template/shared/response-api.model";
import { HandleObservableService } from 'src/app/components/core/utils/handle-observable-service';


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

  obterPopulares(page: number = 2): Observable<ResponseApi> {
    const endPointUrl = `${this.url}/movie/popular?api_key=${this.key}&language=${this.language}&page=${page}`;
    return this.httpClient
      .get<ResponseApi>(endPointUrl)
      .pipe(
        retry(),
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  obterProximos(page: number = 2): Observable<ResponseApi> {
    const endPointUrl = `${this.url}/movie/upcoming?api_key=${this.key}&language=${this.language}&page=${page}`;
    return this.httpClient
      .get<ResponseApi>(endPointUrl)
      .pipe(
        retry(),
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  obterImagemById(movie_id: number): Observable<ResponseApi> {
    const endPointUrl = `${this.url}/movie/${movie_id}/images?api_key=${this.key}`;
    return this.httpClient.get<ResponseApi>(endPointUrl).pipe(
      retry(),
      map((data) => data),
      catchError(this.handleError)
    );
  }

  procurarFilmes(search: string = '', page: number = 1): Observable<any> {
    const endPointUrl = `${this.url}/search/movie?api_key=${this.key}&language=${this.language}&query=${search}&page=${page}`;
    return this.httpClient.get<ResponseApi>(endPointUrl).pipe(
      retry(2),
      map((res: ResponseApi) => {
        return res.results?.filter((i) => i.poster_path !== null);
      }),
      catchError(this.handleError)
    );
  }
}
