import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  constructor(private appStateService : AppStateService, private tripService : TripService) { }

  ngOnInit(): void {
  }

  public deleteTrip() : void {
    const deleted = this.tripService.deleteTrip(this.appStateService.selectedTripId!);
    if(deleted){
      this.appStateService.toggleCreateNewTripModal();
    }
  }

  public cancel() : void {
    this.appStateService.toggleCreateNewTripModal();
  }

}
