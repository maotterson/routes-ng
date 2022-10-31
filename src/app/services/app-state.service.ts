import { Injectable } from '@angular/core';
import { DataStateService } from './data-state.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  isCreatingNewTrip : boolean = false;
  isDeletingTrip : boolean = false;
  isEditingTrip : boolean = false;
  selectedTripId? : Number;

  constructor(private dataStateService : DataStateService) { }

  public openCreateNewTripModal() : void {
    this.closeModals();
    this.isCreatingNewTrip = !this.isCreatingNewTrip;
  }
  public openDeleteTripModal(id : Number) : void {
    this.closeModals();
    this.selectedTripId = id;
    this.isDeletingTrip = !this.isDeletingTrip;
  }
  public openEditTripModal(id : Number) : void {
    this.closeModals();
    this.selectedTripId = id;
    this.isEditingTrip = !this.isEditingTrip;
  }
  public closeModals() : void {
    this.selectedTripId = undefined;
    this.isCreatingNewTrip = false;
    this.isDeletingTrip = false;
    this.isEditingTrip = false;
  }

  public updateView() : void {
    this.dataStateService.updateTrips();
  }
}
