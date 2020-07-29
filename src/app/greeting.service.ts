import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

// import { Observable } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class GreetingService {

  private url = 'http://localhost:8080/api/rest/v1/greeting';

  constructor(private http: HttpClient ) { }

  /*GET greeting from Server*/
  getGreeting(name): Observable<Greeting> {
    if (name.value !== '') {
      const params = new HttpParams().set('name', name.value);
      return this.http.get<Greeting>(this.url, {params: params});
    } else {
      return this.http.get<Greeting>(this.url);
    }
  }
}


export interface Greeting {
  id: number;
  content: string;
}
