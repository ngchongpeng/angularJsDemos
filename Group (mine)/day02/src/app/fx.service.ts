import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class FXService {

  //CONSTRUCTOR
  constructor(private http: HttpClient) { }

  //METHODS
  getFX(): Promise<any> {
    return (this.http.get('https://api.fixer.io/latest')
      .take(1)
      .toPromise());
  }

  getFXWithBase(toBase: string): Promise<any> {
    let qs = new HttpParams()
      .set('base', toBase)
      .set('apikey', '12343545');

    let h = new HttpHeaders()
      .set('X-MyHeader', 'hello')

      return (this.http.get('https://api.fixer.io/latest',
          {
            params: qs,
            headers: h
          })
        .take(1)
        .toPromise());
  }
}
