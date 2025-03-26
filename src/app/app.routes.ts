import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/home/home.component').then((m)=>m.HomeComponent);}
  },
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
  {
    path:'grocery_dashboard',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/Dashboards/grocery/grocery.component').then((m)=>m.GroceryComponent);}
  },
  {
    path:'electronics_dashboard',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/Dashboards/electronic/electronic.component').then((m)=>m.ElectronicComponent);}
  },
  {
    path:'hardware_dashboard',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/Dashboards/hardware/hardware.component').then((m)=>m.HardwareComponent);}
  },
  {
    path:'profile',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/profile/profile.component').then((m)=>m.ProfileComponent);}
  },
  {
    path:'adminlogin',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/admin/admin-auth/admin-login/admin-login.component').then((m)=>m.AdminLoginComponent);}
  },
  {
    path:'adminsignup',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/admin/admin-auth/admin-signup/admin-signup.component').then((m)=>m.AdminSignupComponent);}
  },
  {
    path:'admin_dashboard',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/admin/admin-dashboard/admin-dashboard.component').then((m)=>m.AdminDashboardComponent);}
  },
];