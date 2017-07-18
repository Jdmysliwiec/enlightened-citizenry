import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { apiKey } from './api-keys';

@Injectable()
export class PropublicaService {

  constructor(private http: Http) { }

  legislators: any[];
  memberIntroduced: any;
  memberUpdated: any;
  bill: any;

  getLegislators(branch) {
    this.http.get(`https://api.propublica.org/congress/v1/115/${branch}/members.json`, this.attachHeader()).subscribe((data) => {
      this.legislators = data.json().results[0].members;
      return this.legislators;
    });

  }

  getMemberBillsIntroduced(id) {
    this.http.get(`https://api.propublica.org/congress/v1/members/${id}/bills/introduced.json`, this.attachHeader()).subscribe((data) => {
      this.memberIntroduced = data.json().results[0];
      return this.memberIntroduced;
    });
  }
  getMemberBillsUpdated(id) {
    this.http.get(`https://api.propublica.org/congress/v1/members/${id}/bills/updated.json`, this.attachHeader()).subscribe((data) => {
      this.memberUpdated = data.json().results[0];
      return this.memberUpdated;
    });
  }
  getBillDetails(id, congress) {
    id = id.slice(0, -4);
    this.http.get(`https://api.propublica.org/congress/v1/${congress}/bills/${id}.json`, this.attachHeader()).subscribe((data) => {
      this.bill = data.json().results[0];
      console.log(this.bill);
      return this.bill;
    });
  }

  attachHeader() {
    var headers = new Headers();
    headers.append('X-API-Key', apiKey);
    var header = {headers: headers};
    return header;
  }
}
