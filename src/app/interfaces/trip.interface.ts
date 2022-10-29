import { Place } from "./place.interface";

export interface Trip {
    name : string;
    start : Place;
    end : Place;
}