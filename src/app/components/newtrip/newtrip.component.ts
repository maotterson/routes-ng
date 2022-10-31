import { Component, OnInit } from '@angular/core';
import { NewTripDto } from 'src/app/interfaces/newtripdto.interface';
import { AppStateService } from 'src/app/services/app-state.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.component.html',
  styleUrls: ['./newtrip.component.css']
})
export class NewTripComponent implements OnInit {

  constructor(private appStateService : AppStateService, private tripService : TripService) { }

  ngOnInit(): void {
  }

  public create() : void {
    // todo make dynamic from form
    var tripData : NewTripDto = {
      name : 'created trip',
      start_location_id : 1,
      end_location_id : 2
    };
    const created = this.tripService.createTrip(tripData);
    if(created){
      this.appStateService.closeModals();
    }
  }

  public cancel() : void {
    this.appStateService.closeModals();
  }

}
