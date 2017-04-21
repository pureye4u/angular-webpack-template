import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFound404Component } from './error/not-found404.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', component: NotFound404Component}
];
