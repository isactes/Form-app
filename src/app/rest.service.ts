import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  public get(url: 'https://api-uat.kushkipagos.com'){
    return this.http.get(url); //get
  }
}

//aqui es donde formamos costruyendo la API
