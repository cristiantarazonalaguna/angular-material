import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bar} from '../pages/bar-list/bar';
import {Foo} from '../pages/foo-list/foo';
import {BarGet} from '../pages/bar-list/barGet';

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

    getBarForParameters(bar:BarGet){
        debugger;
        let barChar =  bar.barChar?'barChar='+bar.barChar:'';
        let barVarchar = barChar?bar.barVarchar?'&barVarchar='+bar.barVarchar:'':bar.barVarchar?'barVarchar='+bar.barVarchar:'';
        let barText = barVarchar?bar.barText?'&barText='+bar.barText:'':bar.barText?'barText='+bar.barText:'';
        let barSmallint = barVarchar?bar.barSmallint?'&barSmallint='+bar.barSmallint:'':bar.barSmallint?'barSmallint='+bar.barSmallint:'';
        let barInteger = barSmallint?bar.barInteger?'&barInteger='+bar.barInteger:'':bar.barInteger?'barInteger='+bar.barInteger:'';
        let barBigint = barInteger?bar.barBigint?'&barBigint='+bar.barBigint:'':bar.barBigint?'barBigint='+bar.barBigint:'';
        let barReal = barBigint?bar.barReal?'&barReal='+bar.barReal:'':bar.barReal?'barReal='+bar.barReal:'';
        let barDouble = barReal?bar.barDouble?'&barDouble='+bar.barDouble:'':bar.barDouble?'barDouble='+bar.barDouble:'';
        let barDecimal =  barDouble?bar.barDecimal?'&barDecimal='+bar.barDecimal:'':bar.barDecimal?'barDecimal='+bar.barDecimal:'';
        let barBoolean = barDecimal?bar.barBoolean?'&barBoolean='+bar.barBoolean:'':bar.barBoolean?'barBoolean='+bar.barBoolean:'';
        let barDate = barBoolean?bar.barDate?'&barDate='+bar.barDate:'':bar.barDate?'barDate='+bar.barDate:'';
        let barDateMin = barDate?bar.barDateMin?'&barDateMin='+bar.barDateMin:'':bar.barDateMin?'barDateMin='+bar.barDateMin:'';
        let barDateMax = barDateMin?bar.barDateMax?'&barDateMax='+bar.barDateMax:'':bar.barDateMax?'barDateMax='+bar.barDateMax:'';
        let barTimestamp = barDateMax?bar.barTimestamp?'&barTimestamp='+bar.barTimestamp:'':bar.barTimestamp?'barTimestamp='+bar.barTimestamp:'';
        let barTimestampMin = barTimestamp?bar.barTimestampMin?'&barTimestampMin='+bar.barTimestampMin:'':bar.barTimestampMin?'barTimestampMin='+bar.barTimestampMin:'';
        let barTimestampMax = barTimestampMin?bar.barTimestampMax?'&barTimestampMax='+bar.barTimestampMax:'':bar.barTimestampMax?'barTimestampMax='+bar.barTimestampMax:'';

        const param = barChar+barVarchar+barText+barSmallint+barInteger+barBigint+barReal+barDouble+barDecimal+barBoolean+barDate+barDateMin+barDateMax+barTimestamp+barTimestampMin+barTimestampMax;

        const header = new HttpHeaders().set('Content-Type','application/json');

        return this.http.get(this.url+ 'bar?' + param,{headers:header})

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
