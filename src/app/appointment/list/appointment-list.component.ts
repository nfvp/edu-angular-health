import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../entities/appointment';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent {

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  appointments: Appointment[] = [];

  constructor(service: AppointmentService) {
    service.getAppointmentList().subscribe(
      (res: Appointment[]) => {
        this.appointments = res;
      });
  }

}
