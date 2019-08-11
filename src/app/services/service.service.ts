import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bar} from '../pages/bar-list/bar';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    public url: string;

    constructor(private http: HttpClient) {
        this.url = 'http://192.168.0.6:8080/api/v1/';
    }

    getBar() {

        const header = new HttpHeaders().set('Content-Type', 'aplication/json');

        return this.http.get(this.url + 'bar', {headers: header});
    }

    getBarId(id) {

        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.get(this.url+ 'bar/' + id, {headers});

    }

    addBar(bar: Bar) {
        debugger;
        const json = JSON.stringify(bar);
        const params = json;
        const header = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post(this.url + 'bar', params, {headers:header});

    }

}
