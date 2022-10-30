import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TripComponent } from './components/trip/trip.component';
import { NewTripComponent } from './components/newtrip/newtrip.component';
import { EditTripComponent } from './components/edit-trip/edit-trip.component';
import { DeleteTripComponent } from './components/delete-trip/delete-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    NewTripComponent,
    EditTripComponent,
    DeleteTripComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
