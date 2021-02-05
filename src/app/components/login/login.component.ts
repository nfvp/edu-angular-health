import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    username: string;
    password: string;

    constructor(private route: Router) { }

    login() {
        console.log("login(" + this.username + ", " + this.password + ")")
        this.route.navigate(['home'])
    }

}
