import { Component, OnInit } from '@angular/core';
import { Trip } from './interfaces/trip.interface';
import { TripResponse } from './interfaces/tripresponse.interface';
import { TripService } from './services/trip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routes-ng';
  trips! : Trip[] | undefined;

  constructor(
    private tripService : TripService
  ) { }

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips() : void {
    this.tripService.getTrips()
      .subscribe( (response : TripResponse) => {
        this.trips = response.data;
      });
  }
}
