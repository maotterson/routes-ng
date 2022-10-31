import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TripResponse } from '../interfaces/tripresponse.interface';
import { Trip } from '../interfaces/trip.interface';
import { EditTripDto } from '../interfaces/edittripdto.interface';
import { NewTripDto } from '../interfaces/newtripdto.interface';
import { DeleteTripResponse } from '../interfaces/deletetripresponse.interface';


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

  createTrip(data : NewTripDto) : Boolean { 
    const response = this.http.post(this.api_url, data);
    return true;
  }

  deleteTrip(id : Number) : Boolean { 
    const url = `${this.api_url}/${id}/`;
    const response = this.http.delete<DeleteTripResponse>(url);
    return true;
  }

  editTrip(id : Number, data: EditTripDto) : Boolean { 
    const url = `${this.api_url}/${id}/`;
    const response = this.http.put(url, data);
    return true;
  }
}
