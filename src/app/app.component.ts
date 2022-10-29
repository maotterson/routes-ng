import { Component, OnInit } from '@angular/core';
import { TripService } from './services/trip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routes-ng';
  trips : any;

  constructor(
    private tripService : TripService
  ) { }

  ngOnInit(): void {
    this.trips = this.tripService.getTrips();
  }
}
