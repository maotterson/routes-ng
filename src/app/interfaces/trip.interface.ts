import { Directions } from "./directions.interface";
import { Place } from "./place.interface";

export interface Trip {
    id : Number;
    name : string;
    start_location : Place;
    end_location : Place;
    directions?: Directions;
}