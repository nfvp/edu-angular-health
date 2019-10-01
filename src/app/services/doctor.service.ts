import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl: string = "http://localhost:8080/doctors";  

  constructor(private httpClient: HttpClient) { }

  getDoctorList() {
    return this.httpClient.get(this.baseUrl);
  }

}