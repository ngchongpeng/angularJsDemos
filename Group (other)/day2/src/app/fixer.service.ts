// Page imports from libraries
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// Service class
@Injectable()
export class FixerService {

  // Properties - Event emitter
  baseRateEvent = new EventEmitter<string>();

  // Constructor
  constructor(private http: HttpClient) { }

  // Method - Local
  getExchangeRate(br: string): Promise<any> {
    
    // Set HttpParams
    let qs = new HttpParams()
      .set('base', br);

    //Returns an observable
    return (
      this.http.get('https://api.fixer.io/latest', { params: qs })
        // from observable take 1 from the stream
        .take(1)
        // convert observable to promise
        .toPromise()
        // perform the following method with result
        .then((result) => { return (result.rates); }
        )
    );
  }
}
