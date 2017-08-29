import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Inventory } from './inventory';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InventoryService {

  private headers = new Headers({'Content-Type':'aplication/json'});
  private url = 'http://localhost:8000/inventario'
  constructor(private http: Http) { }

  getInventory(): Observable<Inventory[]>{

    let url = `${this.url}`;
    return this.http.get(url)
               .map( r => r.json())
               .catch(this.handleError)

  }

  private handleError(error : Response | any){
    let errMsg: string;
    if(error instanceof Response){
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = `${ error.status } - ${ error.statusText || ''} ${err}`

    }else {
      console.log('erro function efgfs');
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);

  } 

}
