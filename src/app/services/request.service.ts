import { ApiConst } from '../ApiConst';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ApiResponse, ApiResponseSerializer } from '../models/ApiResponse';
import { Serializer } from '../serializer/Serializer';
import { isNullOrUndefined } from 'util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  protected apiBaseUrl = ApiConst.apiBaseUrl;
  constructor(public httpClient: HttpClient
  ) {  }

  httpOptions = {};

  get() {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ApiConst.token,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept':'*/*',
        'Host':'api.mercedes-benz.com'
      }),
      useCredentials: true
    };


    console.log(this.httpOptions)

    return this.httpClient.get('https://api.mercedes-benz.com/experimental/connectedvehicle/v1/vehicles', this.httpOptions)
    .subscribe( (res:any) => {
      const apiResponse = res;
    });
      
  }

  
}


