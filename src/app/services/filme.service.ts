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

  api = environment.api;
  reqUrl = environment.reqUrl;
  key = environment.apikey;
  language: string = 'pt-BR';

  obterPopulares(page: number = 1): Observable<ResponseApi> {
    const endPointUrl = `${this.reqUrl}popular${this.key}&language=${this.language}&page=${page}`;
    return this.httpClient
      .get<ResponseApi>(endPointUrl)
      .pipe(
        retry(2),
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  obterBanner(page: number = 1): Observable<ResponseApi> {
    const endPointUrl = `${this.api}trending/all/week${this.key}&language=${this.language}&page=${page}`;
    return this.httpClient
      .get<ResponseApi>(endPointUrl)
  }

  obterProximos(page: number = 1): Observable<ResponseApi> {
    const endPointUrl = `${this.reqUrl}upcoming${this.key}&language=${this.language}&page=${page}`;
    return this.httpClient
      .get<ResponseApi>(endPointUrl)
      .pipe(
        retry(2),
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  maisAssistidos(page: number = 1): Observable<ResponseApi> {
    const endPointUrl = `${this.reqUrl}top_rated${this.key}&language=${this.language}&page=${page}`;
    return this.httpClient
      .get<ResponseApi>(endPointUrl)
      .pipe(
        retry(2),
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

}
