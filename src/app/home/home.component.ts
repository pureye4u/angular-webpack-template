import { Component } from '@angular/core';
import { HeaderModel } from '../shared/components';

@Component({
    selector: 'ui-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent {
    headerModel: HeaderModel;
    message: string;

    constructor() {
        this.headerModel = new HeaderModel('Welcome');
        this.message = 'Welcome!!!';
    }
}
