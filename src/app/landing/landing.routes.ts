import { Routes } from '@angular/router';

import { LandingComponent } from './landing.component';

export const landing_routes: Routes = [
    {
        path: 'home',
        children: [
            {path: '', component: LandingComponent},
            // {path: '', component: MainComponent, outlet: 'landing'}
        ]
    }
];
