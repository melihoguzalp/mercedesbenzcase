import { Injectable } from '@angular/core';
import { Serializer } from '../serializer/Serializer';

export class DistanceDrivenDto   {
    public unit : string | undefined;
    public value : number | undefined;
    public retrievalstatus : string | undefined;
    public timestamp : number | undefined;
}

@Injectable()
export class DistanceDrivenSerializer
  implements Serializer {
    toJsonForSearch(data: any) {
        throw new Error("Method not implemented.");
    }
  fromJson(json: any): DistanceDrivenDto {
    json = typeof json === "object" ? json : {};
    const process = new DistanceDrivenDto();

    process.unit = json["unit"];
    process.value = json["value"];
    process.retrievalstatus = json["retrievalstatus"];
    process.timestamp = json["timestamp"];

    return process;
  }
  toJson(resource: DistanceDrivenDto) {
    const data = {};

    data["unit"] = resource.unit;
    data["value"] = resource.value;
    data["retrievalstatus"] = resource.retrievalstatus;
    data["timestamp"] = resource.timestamp;

    return data;
  }
}
