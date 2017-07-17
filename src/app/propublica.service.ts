import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { apiKey } from './api-keys';

@Injectable()
export class PropublicaService {

  constructor(private http: Http) { }

  legislators: any[];

  getLegislators(branch) {
    var headers = new Headers();
    headers.append('X-API-Key', apiKey);

    this.http.get(`https://api.propublica.org/congress/v1/115/${branch}/members.json`, {headers: headers}).subscribe((data) => {
      this.legislators = data.json().results[0].members;
      return this.legislators;
    });

  }
}
