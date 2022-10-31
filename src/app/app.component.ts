import { Component, OnInit } from '@angular/core';
import { Trip } from './interfaces/trip.interface';
import { TripResponse } from './interfaces/tripresponse.interface';
import { AppStateService } from './services/app-state.service';
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
    private tripService : TripService,
    private appStateService : AppStateService
  ) { }

  ngOnInit(): void {
    this.getTrips();
  }
  
  get isCreatingNewTrip() {
    return this.appStateService.isCreatingNewTrip;
  }

  get isEditingTrip() {
    return this.appStateService.isEditingTrip;
  }

  get isDeletingTrip() {
    return this.appStateService.isDeletingTrip;
  }

  private getTrips() : void {
    this.tripService.getTrips()
      .subscribe( (response : TripResponse) => {
        this.trips = response.data.trips;
        console.log(response)
      });
  }

  public toggleCreateNewTripModal() : void {
    this.appStateService.openCreateNewTripModal();
  }
  
}
