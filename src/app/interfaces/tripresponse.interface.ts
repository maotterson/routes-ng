import { Place } from "./place.interface";
import { Trip } from "./trip.interface";

export interface TripResponse {
    timestamp : string,
    status : string,
    statusCode : number,
    reason? : string,
    message? : string,
    data : Trip[],
}