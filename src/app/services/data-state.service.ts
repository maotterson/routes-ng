import { Injectable } from '@angular/core';
import { Trip } from '../interfaces/trip.interface';
import { TripResponse } from '../interfaces/tripresponse.interface';
import { TripService } from './trip.service';

@Injectable({
  providedIn: 'root'
})
export class DataStateService {
  trips! : Trip[] | undefined;

  constructor(private tripService : TripService) { }

  public updateTrips() : void {
    this.tripService.getTrips()
      .subscribe( (response : TripResponse) => {
        this.trips = response.data.trips;
      });
  }
}
