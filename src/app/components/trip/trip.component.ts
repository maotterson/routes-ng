import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip.interface';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  @Input() trip! : Trip;

  constructor(private appStateService : AppStateService) { }

  ngOnInit(): void {
  }

}
