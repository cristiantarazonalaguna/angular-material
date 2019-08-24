import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bar} from '../pages/bar-list/bar';
import {Foo} from '../pages/foo-list/foo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    public url: string;


    constructor(private http: HttpClient) {
        this.url = 'http://localhost:8081/api/v1/';
    }
    getBar() {

        const header = new HttpHeaders().set('Content-Type', 'aplication/json');

        return this.http.get(this.url + 'bar', {headers: header});
    }

    deleteBar(id){

        const headers = new HttpHeaders().set('Content-Type' , 'application/json');

        return this.http.delete(this.url+'bar/' + id, {headers})
    }

    getBarId(id) {

        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.get(this.url+ 'bar/' + id, {headers});

    }

    getEdit(id,bar:Bar){
        debugger;
        const json = JSON.stringify(bar);
        const params = json;
        const headers = new HttpHeaders().set('Content-Type' , 'application/json');

        return this.http.put(this.url + 'bar/' + id , params, {headers})
    }

    addBar(bar: Bar) {
        debugger;
        const json = JSON.stringify(bar);
        const params = json;
        const header = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post(this.url + 'bar', params, {headers:header});

    }

    getFoo() {

        const header = new HttpHeaders().set('Content-Type', 'aplication/json');

        return this.http.get(this.url + 'foo', {headers: header});
    }

    deleteFoo(id){

        const headers = new HttpHeaders().set('Content-Type' , 'application/json');

        return this.http.delete(this.url+'foo/' + id, {headers})
    }

    getFooId(id) {

        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.get(this.url+ 'foo/' + id, {headers});

    }

    getFooEdit(id,foo:Foo){
        debugger;
        const json = JSON.stringify(foo);
        const params = json;
        const headers = new HttpHeaders().set('Content-Type' , 'application/json');

        return this.http.put(this.url + 'foo/' + id , params, {headers})
    }

    addFoo(foo: Foo) {
        debugger;
        const json = JSON.stringify(foo);
        const params = json;
        const header = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post(this.url + 'foo', params, {headers:header});

    }


}
