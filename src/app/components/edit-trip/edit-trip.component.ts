import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';
import { TripService } from 'src/app/services/trip.service';
import { EditTripDto } from 'src/app/interfaces/edittripdto.interface';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  constructor(private appStateService : AppStateService, private tripService : TripService) { }

  ngOnInit(): void {
  }

  public edit() : void {
    const tripId = this.appStateService.selectedTripId;

    // todo make dynamic
    const tripData : EditTripDto = {
      name : 'edited trip',
      start_location_id : 1,
      end_location_id : 2
    };

    const edited = this.tripService.editTrip(tripId!, tripData);
    if(edited){
      this.appStateService.toggleCreateNewTripModal();
    }
  }

  public cancel() : void {
    this.appStateService.toggleCreateNewTripModal();
  }

}
