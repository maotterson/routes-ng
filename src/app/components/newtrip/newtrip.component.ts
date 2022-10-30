import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.component.html',
  styleUrls: ['./newtrip.component.css']
})
export class NewTripComponent implements OnInit {

  constructor(private appStateService : AppStateService) { }

  ngOnInit(): void {
  }

  private toggleCreateNewTrip() : void {
    this.appStateService.toggleCreateNewTrip();
  }
}
