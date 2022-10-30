import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TripResponse } from '../interfaces/tripresponse.interface';


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

  getTrips(){
    return this.http.get<TripResponse>(this.api_url);
  }

  createTrip(data : any){ // change payload type
    return this.http.post(this.api_url, data);
  }
}
