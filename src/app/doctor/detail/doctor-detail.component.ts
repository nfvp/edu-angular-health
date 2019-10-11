import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../entities/doctor';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent {

  id: string;
  doctor: Doctor;

  constructor(doctorService: DoctorService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id");

    doctorService.getDoctor(this.id).subscribe(
      (res: Doctor) => {
        this.doctor = res;
      });
  }

  saveDoctor() {

  }

}
