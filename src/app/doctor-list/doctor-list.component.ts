import { Component, OnInit } from '@angular/core';
import { Doctor } from '../entities/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[] = [];
  displayedColumns: string[] = ['name', 'phoneNumber', 'wage', 'speciality'];


  constructor(service: DoctorService) {
    service.getDoctorList().subscribe(
      (res:Doctor[]) => {
                this.doctors = res;
            });
  }

  ngOnInit() {
  }

}
