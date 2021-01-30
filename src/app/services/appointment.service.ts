import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Appointment } from '../entities/appointment';

@Injectable()
export class AppointmentService {

    private baseUrl: string = "http://localhost:8888/api/appointments";

    constructor(private httpClient: HttpClient) { }

    getAppointmentList() {
        return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
    }

    getAppointment(id: string) {
        return this.httpClient.get(`${this.baseUrl}/${id}`);
    }

    createAppointment(appointment: Appointment) {
        return this.httpClient.post(`${this.baseUrl}`, appointment);
    }

    updateAppointment(appointment: Appointment) {
        return this.httpClient.put(`${this.baseUrl}/${appointment.id}`, appointment);
    }

    deleteAppointment(id: string) {
        return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

}