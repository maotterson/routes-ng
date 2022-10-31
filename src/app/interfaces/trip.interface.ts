import { Place } from "./place.interface";

export interface Trip {
    id : Number;
    name : string;
    start_location : Place;
    end_location : Place;
    duration_in_traffic? : Number;
}