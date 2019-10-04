export interface Serializer {
    fromJson(json): any;
    toJson(data): any;
    toJsonForSearch(data): any;
}