import { Place } from "../place.interface";
import { Trip } from "../trip.interface";

export interface TripResponse {
    timestamp : string,
    status : string,
    status_code : number,
    reason? : string,
    message? : string,
    data : {
        trips? : Trip[],
        trip? : Trip
    },
}