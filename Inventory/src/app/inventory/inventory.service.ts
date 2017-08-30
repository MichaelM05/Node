import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Inventory } from './inventory';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InventoryService {

  private headers = new Headers({ 'Content-Type': 'aplication/json' });
  private url = 'http://localhost:8000/inventario';
  private urlPost = 'http://localhost:8000/inventario/';
  constructor(private http: Http) { }

  getInventory(): Observable<Inventory[]> {

    let url = `${this.url}`;
    return this.http.get(url)
      .map(r => r.json())
      .catch(this.handleError);

  }

  /**addInventory(inventory: Inventory): Observable<Response> {
    let url = `${this.urlPost}`;
    let information = JSON.stringify(inventory);
    return this.http.post(url, information, { headers: this.headers })
      .map(r => r.json())
      .catch(this.handleError);

  }**/

  getInventoryById(id: string): Observable<Inventory[]> {
    let url = `${this.url}`;
    let myParams = new URLSearchParams();
    myParams.append('id', id);
    let options = new RequestOptions({ headers: this.headers, params: myParams });
    return this.http.get(url, options)
      .map(r => r.json())
      .catch(this.handleError);

  }


  addInventory(inventory: Inventory): Observable<Inventory[]> {
    let bodyString = JSON.stringify(inventory);
    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(this.url, inventory, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  udpateInventory(inventory: Inventory) {
    let url = `${this.url}`;
    let iJson = JSON.stringify(inventory);
    return this.http.put(url, iJson, { headers: this.headers })
      .map(r => r.json())
      .catch(this.handleError);
  }


  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`

    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);

  }

}
