import { Injectable } from '@angular/core';
import { Serializer } from '../serializer/Serializer';

export class VehicleDto {
    public id : string | undefined;
    public licenseplate : string | undefined;
    public finorvin : string | undefined;
}

@Injectable()
export class VehicleSerializer
  implements Serializer {
    toJsonForSearch(data: any) {
        throw new Error("Method not implemented.");
    }
  fromJson(json: any): VehicleDto {
    json = typeof json === "object" ? json : {};
    const process = new VehicleDto();

    process.id = json["id"];
    process.licenseplate = json["licenseplate"];
    process.finorvin = json["finorvin"];

    return process;
  }
  toJson(resource: VehicleDto) {
    // const data = {};

    // data["unit"] = resource.unit;
    // data["value"] = resource.value;
    // data["retrievalstatus"] = resource.retrievalstatus;
    // data["timestamp"] = resource.timestamp;

    // return data;

    return null;
  }
}