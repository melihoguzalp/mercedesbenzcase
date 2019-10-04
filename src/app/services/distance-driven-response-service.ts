import { Injectable } from "@angular/core";
import { RequestService } from './request.service';
import { DistanceDrivenSerializer } from '../models/distance-driven-dto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DistanceDrivenResponseService  {
    /**
     *
     */
    constructor(httpClient : HttpClient) {
        
    }
}
