import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
    constructor(private route: Router) { }

    goToPatients() {
        this.route.navigate(['patients'])
    }

    goToDoctors() {
        this.route.navigate(['doctors'])
    }
    
    goToAppointments() {
        this.route.navigate(['appointments'])
    }

}
