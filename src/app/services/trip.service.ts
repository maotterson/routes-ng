import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TripService {
  api_url : string;

  constructor(
    private http : HttpClient
  ) { 
    this.api_url = `${environment.ROUTES_API_URL}/trips`
  }

  async getTrips(){
    const trips = await this.http.get(this.api_url);
    console.log(trips);
  }
}
