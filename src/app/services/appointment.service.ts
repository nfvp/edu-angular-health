import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Appointment } from '../entities/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl: string = "http://localhost:8080/api/appointments";

  constructor(private httpClient: HttpClient) { }

  getAppointmentList() {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }

  getAppointment(id) {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createAppointment(appointment) {
    return this.httpClient.post(`${this.baseUrl}`, appointment);
  }

  updateAppointment(appointment) {
    return this.httpClient.put(`${this.baseUrl}/${appointment.id}`, appointment);
  }

  deleteAppointment(id) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}