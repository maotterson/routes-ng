import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';
import { TripService } from 'src/app/services/trip.service';
import { EditTripDto } from 'src/app/interfaces/dtos/edittripdto.interface';
import { DataStateService } from 'src/app/services/data-state.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  name : string = "";
  startLocation : string = "";
  endLocation : string = "";

  constructor(private appStateService : AppStateService, private tripService : TripService, private dataStateService : DataStateService) { }
  
  ngOnInit(): void {
      this.name = this.trip?.name || "";
  }

  get trip(){
    return this.dataStateService.activeTrip;
  }

  public edit() : void {
    const tripId = this.appStateService.selectedTripId;

    // todo make dynamic
    const tripData : EditTripDto = {
      name : 'edited trip',
      start_location_id : 1,
      end_location_id : 2
    };

    this.tripService
      .editTrip(tripId!, tripData)
      .subscribe(res => {
        if(res.status_code == 200){
          this.appStateService.closeModals();
          this.appStateService.updateView();
        }
      });
  }

  public cancel() : void {
    this.appStateService.closeModals();
  }

}
