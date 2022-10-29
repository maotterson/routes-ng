import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  url = "http://localhost:8080/api/v1/trips";

  constructor(
    private http : HttpClient
  ) { }

  async getTrips(){
    let trips = await this.http.get(this.url);
    console.log(trips);
  }
}
