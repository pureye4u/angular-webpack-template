import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SHARED_COMPONENTS } from './components';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        // without forRoot, because this is a child module
        NgbModule,
    ],
    exports: [
        SHARED_COMPONENTS,
    ],
    declarations: [
        SHARED_COMPONENTS,
    ],
    providers: []
})
export class SharedModule {
}
