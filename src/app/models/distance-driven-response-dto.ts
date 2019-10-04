import { DistanceDrivenDto } from './distance-driven-dto';
import { Injectable } from '@angular/core';
import { Serializer } from '../serializer/Serializer';

export class DistanceDrivenResponseDto {
    public odometer: DistanceDrivenDto | undefined;
    public distancesincereset: DistanceDrivenDto | undefined;
    public distancesincestart: DistanceDrivenDto | undefined;
}

@Injectable()
export class DistanceDrivenResponsSerializer implements Serializer {
    fromJson(json: any) {
        return json;
    } 
    toJson(data: any) {
        return data;
    }
    toJsonForSearch(data: any) {
        throw new Error("Method not implemented.");
    }
}