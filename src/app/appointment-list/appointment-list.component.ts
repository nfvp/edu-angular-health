import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../entities/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[] = [];
  
  constructor(service: AppointmentService) {
    service.getAppointmentList().subscribe(
      (res:Appointment[]) => {
                this.appointments = res;
            });
  }

  ngOnInit() {
  }

}
