import { Component, OnInit } from '@angular/core';
import { NewTripDto } from 'src/app/interfaces/dtos/newtripdto.interface';
import { AppStateService } from 'src/app/services/app-state.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.component.html',
  styleUrls: ['./newtrip.component.css']
})
export class NewTripComponent implements OnInit {
  name : string = "";
  startLocation : string = "";
  endLocation : string = "";

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
    this.tripService
      .createTrip(tripData)
      .subscribe(res => {
        if(res.status_code == 201){
          this.appStateService.closeModals();
          this.appStateService.updateView();
        }
      });
  }

  public cancel() : void {
    this.appStateService.closeModals();
  }

}
