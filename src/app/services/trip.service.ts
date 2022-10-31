import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TripResponse } from '../interfaces/tripresponse.interface';
import { Trip } from '../interfaces/trip.interface';
import { EditTripDto } from '../interfaces/edittripdto.interface';
import { NewTripDto } from '../interfaces/newtripdto.interface';
import { DeleteTripResponse } from '../interfaces/deletetripresponse.interface';
import { EditTripResponse } from '../interfaces/edittripresponse.interface';
import { CreateTripResponse } from '../interfaces/createtripresponse.interface';


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
    const response = this.http.post<CreateTripResponse>(this.api_url, data);
    const isSuccess = response.subscribe(res => res.status_code == 201 ? true : false).closed;
    return isSuccess;
  }

  deleteTrip(id : Number) : Boolean { 
    const url = `${this.api_url}/${id}/`;
    const response = this.http.delete<DeleteTripResponse>(url);
    const isSuccess = response.subscribe(res => res.status_code == 200 ? true : false).closed;
    return isSuccess;
  }

  editTrip(id : Number, data: EditTripDto) : Boolean { 
    const url = `${this.api_url}/${id}/`;
    const response = this.http.put<EditTripResponse>(url, data);
    const isSuccess = response.subscribe(res => res.status_code == 200 ? true : false).closed;
    return isSuccess;
  }
}
