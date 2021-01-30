import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private route: Router) {}

    login() {
        this.route.navigate(['home'])
    }

}
