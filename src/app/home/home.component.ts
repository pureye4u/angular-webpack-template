import { Component } from '@angular/core';

@Component({
    selector: 'ui-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent {
    message: string;

    constructor() {
        this.message = 'Welcome!!!';
    }
}
