import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path:'',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/landing-page/landing-page.component').then((m)=>m.LandingPageComponent);}
  },

  // <--------------------- User Auth Routes --------------------->
  
  {
    path:'signup',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/sign-up/sign-up.component').then((m)=>m.SignUpComponent);}
  },
  {
    path:'login',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/login/login.component').then((m)=>m.LoginComponent);}
  },
  // <--------------------- Profile Routee --------------------->
  
  {
    path:'profile',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/profile/profile.component').then((m)=>m.ProfileComponent);}
  },

  // <--------------------- Admin Routes --------------------->
  
  {
    path:'adminLogin',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/admin/admin-auth/admin-login/admin-login.component').then((m)=>m.AdminLoginComponent);}
  },
  {
    path:'adminDashboard',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/admin/admin-dashboard/admin-dashboard.component').then((m)=>m.AdminDashboardComponent);}
  },
  
  // <--------------------- Store Routes --------------------->
  {
    path:'storeHome',
    pathMatch:'full',
    loadComponent: () => {return import('./Pages/Store/store-home/store-home.component').then((m)=> m.StoreHomeComponent)},
  },
  {
    path:'storeDashboard',
    pathMatch:'full',
    loadComponent: () => {return import('./Pages/Store/store-dashboard/store-dashboard.component').then((m)=> m.StoreDashboardComponent)},
  },
  ];