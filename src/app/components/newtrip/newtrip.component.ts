import { Component, OnInit } from '@angular/core';
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
    var data = "";
    this.tripService.createTrip(data);
  }

  public cancel() : void {
    this.appStateService.toggleCreateNewTripModal();
  }

}
