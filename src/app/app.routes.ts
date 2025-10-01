import { Routes } from '@angular/router';
import { Atividades } from './components/atividades/atividades';
import { authGuard } from './auth/authGuard';
import { Login } from './components/login/login';

export const routes: Routes = [
    {
        path: 'atividades',
        component: Atividades,
        canActivate: [authGuard],
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: '**', 
        redirectTo: 'login'
    }

];
