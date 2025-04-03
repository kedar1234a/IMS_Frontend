import { Routes } from '@angular/router';
import { DashboardComponent } from './Pages/Store/store-dashboard/dashboard.component';
import { authgardGuard } from './authgard.guard';
import { StoreHomeComponent } from './Pages/Store/store-home/store-home.component';
import { HomeComponent } from './Pages/Store/aside-secssion/home/home.component';
import { ProductComponent } from './Pages/Store/aside-secssion/product/product.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      );
    },
  },

  // <--------------------- User Auth Routes --------------------->

  {
    path: 'signup',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
      );
    },
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
  },
  // <--------------------- Profile Routee --------------------->

  {
    path: 'profile',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/profile/profile.component').then(
        (m) => m.ProfileComponent
      );
    },
  },

  // <--------------------- Admin Routes --------------------->

  {
    path: 'adminLogin',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/admin/admin-auth/admin-login/admin-login.component'
      ).then((m) => m.AdminLoginComponent);
    },
  },
  {
    path: 'adminDashboard',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/admin/admin-dashboard/admin-dashboard.component'
      ).then((m) => m.AdminDashboardComponent);
    },
  },

  // <--------------------- Store Routes --------------------->
  {
    path: 'storeHome',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/Store/store-home/store-home.component').then(
        (m) => m.StoreHomeComponent
      );
    },
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/Store/store-dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      );
    },
  },
  {
    path: 'dashboardHome',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/Store/aside-secssion/home/home.component').then(
        (m) => m.HomeComponent
      );
    },
    outlet: 'outlet2',
  },
  {
    path: 'product',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Store/aside-secssion/product/product.component'
      ).then((m) => m.ProductComponent);
    },
    outlet: 'outlet2',
  },
];
