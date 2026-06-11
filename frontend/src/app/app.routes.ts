import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Gaesteliste } from './gaesteliste/gaesteliste';
import { Sitzplan } from './sitzplan/sitzplan';
import { Fotoalbum } from './fotoalbum/fotoalbum';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'gaesteliste', component: Gaesteliste },
    { path: 'sitzplan', component: Sitzplan },
    { path: 'fotoalbum', component: Fotoalbum }
];
