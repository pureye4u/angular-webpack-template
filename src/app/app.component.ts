import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-root',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

    ngOnInit() {
        console.log('### AppComponent init');
        console.log(webpack.ENV);
    }
}
