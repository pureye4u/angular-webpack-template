import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { IdlePreloadModule } from '@angularclass/idle-preload';

import { ROUTES } from './app.routing';

import '../styles/styles.scss';

import { COMPONENTS } from './components';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        IdlePreloadModule.forRoot(),
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules }),
        SharedModule,
    ],
    declarations: [
        AppComponent,
        COMPONENTS,
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {
    constructor(public appRef: ApplicationRef) {}
    hmrOnInit(store: any): any {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', store);
        console.log('store.state.data:', store.state.data);
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }
    hmrOnDestroy(store: any): any {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        store.disposeOldHosts = createNewHosts(cmpLocation);
        store.state = {data: 'example value'};
        store.restoreInputValues  = createInputTransfer();
        removeNgStyles();
    }
    hmrAfterDestroy(store: any): any {
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
