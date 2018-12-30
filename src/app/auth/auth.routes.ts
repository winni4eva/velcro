import { Routes } from '@angular/router';

// import {LoginComponent} from './login/login.component';

export const login_routes: Routes = [
    {
        path: 'login',
        children: [
            // {path: '', component: LoginComponent},
            // {path: '', component: MainComponent, outlet: 'landing'}
        ]
    },
    {
        path: 'signup',
        children: [
            // {path: '', component: SignUpComponent},
            // {path: '', component: MainComponent, outlet: 'landing'}
        ]
    },

];
