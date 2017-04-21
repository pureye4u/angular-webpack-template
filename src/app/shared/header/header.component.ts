import { Component, Input } from '@angular/core';

export class HeaderModel {
    title: string;
    constructor(
        title: string,
    ) {
        this.title = title;
    }
}

@Component({
    selector: 'ui-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent {
    @Input() model: HeaderModel;
}
