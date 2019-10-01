import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl: string = "http://localhost:8080/appointments";

  constructor(private httpClient: HttpClient) { }

  getAppointment(id: string) {
    return this.httpClient.get(this.baseUrl + '/${id}');
  }

  getAppointmentList() {
    return this.httpClient.get(this.baseUrl);
  }

}