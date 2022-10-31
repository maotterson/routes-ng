import { Component, OnInit } from '@angular/core';
import { Trip } from './interfaces/trip.interface';
import { TripResponse } from './interfaces/tripresponse.interface';
import { AppStateService } from './services/app-state.service';
import { DataStateService } from './services/data-state.service';
import { TripService } from './services/trip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routes-ng';

  constructor(
    private appStateService : AppStateService,
    private dataStateService : DataStateService
  ) { }

  ngOnInit(): void {
    this.getTrips();
  }

  get trips() {
    return this.dataStateService.trips;
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
    this.dataStateService.updateTrips();
  }

  public openCreateModal() : void {
    this.appStateService.openCreateNewTripModal();
  }
  
}
