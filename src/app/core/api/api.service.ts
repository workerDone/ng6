
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { observable, action, computed } from 'mobx-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _apiUrl: string = 'https://jsonplaceholder.typicode.com';
  private _apiUrlSuffixe = '/';

  constructor(
    private http: HttpClient
  ) { }

  @action setApiUrl(value: string) {
    this._apiUrl = value;
  }

  @computed get apiUrl() {
    return this._apiUrl;
  }

  @computed get apiUrlSuffixe() {
    return this._apiUrlSuffixe;
  }

  @computed get baseApiUrl() {
    return this._apiUrl + this._apiUrlSuffixe;
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${this.baseApiUrl}${path}`, { params })
      .pipe(
        catchError(err => this.formatErrors(err))
      );
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${this.baseApiUrl}${path}`, body)
      .pipe(
        catchError(err => this.formatErrors(err))
      );
  }

  putFormdata(path: string, formData: FormData = new FormData()): Observable <any> {
    return this.http
      .put(`${this.baseApiUrl}${path}`, formData)
      .pipe(
        catchError(err => this.formatErrors(err))
      );
  }


  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${this.baseApiUrl}${path}`, body)
      .pipe(
        catchError(err => this.formatErrors(err))
      );
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${this.baseApiUrl}${path}`)
      .pipe(
        catchError(err => this.formatErrors(err))
      );
  }

  private formatErrors(error: any) {
    let parsedError;

    try {
      parsedError = error.json();
    } catch (err) { }

    return throwError(parsedError || error);
  }
}
