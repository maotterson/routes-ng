import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  isCreatingNewTrip : boolean = false;
  isDeletingTrip : boolean = false;
  isEditingTrip : boolean = false;

  constructor() { }

  public toggleCreateNewTripModal() : void {
    this.isCreatingNewTrip = !this.isCreatingNewTrip;
  }
  public toggleDeleteTripModal() : void {
    this.isDeletingTrip = !this.isDeletingTrip;
  }
  public toggleEditTripModal() : void {
    this.isEditingTrip = !this.isEditingTrip;
  }
}
