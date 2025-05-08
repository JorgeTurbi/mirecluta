import { Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./Components/main/main.component').then((m) => m.MainComponent),
      },
      {
        path: 'vacantes',
        loadComponent: () =>
          import('./Components/vacancy/vacancy.component').then((m) => m.VacancyComponent),
      },
      {
        path: 'Perfil',
        loadComponent: () =>
          import('./Components/profile/profile.component').then((m) => m.ProfileComponent),
      },
       {
        path: 'detalles/:id',
        loadComponent: () =>
          import('./Components/vacancydetails/vacancydetails.component').then((m) => m.VacancydetailsComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inicio',
      },
    ],
  },


           {
        path: 'login',
        loadComponent: () =>
          import('./Components/auth/login/login.component').then((m) => m.LoginComponent),
      },
             {
        path: 'registro',
        loadComponent: () =>
          import('./Components/auth/register/register.component').then((m) => m.RegisterComponent),
      },

  {
    path: '**',
    redirectTo: 'inicio',
  },
];
