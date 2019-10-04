import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { Serializer } from '../serializer/Serializer';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class ServiceCrudBase   {
    constructor(
        httpClient: HttpClient
    ) {
    }

}