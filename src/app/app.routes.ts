import { Routes } from '@angular/router';
// import { authgardGuard } from './authgard.guard';
// import { UserdashboardComponent } from './UserDashboard/userdashboard/userdashboard.component';
// import { BillingComponent } from './UserDashboard/Sections/billing/billing.component';
// import { ProductComponent } from './UserDashboard/Sections/product/product.component';
// import { HomeComponent } from './UserDashboard/Sections/home/home.component';

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
      return import('./Pages/Authentication/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
      );
    },
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/Authentication/login/login.component').then(
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

  // <--------------------- Electronics Store Routes --------------------->

  {
    path: 'electronics-store-home',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Electronics-Store/electronics-store-home/electronics-store-home.component'
      ).then((m) => m.ElectronicsStoreHomeComponent);
    },
  },
  {
    path: 'electronics-store-see-more',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Electronics-Store/electronics-store-home/electronics-see-more/electronics-see-more.component'
      ).then((m) => m.ElectronicsSeeMoreComponent);
    },
  },

  // <--------------------- Grocery Store Routes --------------------->

  {
    path: 'grocery-store-home',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Grocery-Store/grocery-store-home/grocery-store-home.component'
      ).then((m) => m.GroceryStoreHomeComponent);
    },
  },
  {
    path: 'grocery-store-see-more',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Grocery-Store/grocery-store-home/grocery-see-more/grocery-see-more.component'
      ).then((m) => m.GrocerySeeMoreComponent);
    },
  },

  // <--------------------- Industrial Store Routes --------------------->

  {
    path: 'industrial-hardware-store-home',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Industrial-Hardware-Store/industrial-hardware-store-home/industrial-hardware-store-home.component'
      ).then((m) => m.IndustrialHardwareStoreHomeComponent);
    },
  },
  {
    path: 'industrial-hardware-store-see-more',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Industrial-Hardware-Store/industrial-hardware-store-home/industrial-hardware-store-home.component'
      ).then((m) => m.IndustrialHardwareStoreHomeComponent);
    },
  },

  {
    path: 'dashboardHome',
    outlet: 'outlet2',
    loadComponent: () => {
      return import('./UserDashboard/Sections/home/home.component').then(
        (m) => m.HomeComponent
      );
    },
  },
  {
    path: 'product',
    loadComponent: () => {
      return import('./UserDashboard/Sections/product/product.component').then(
        (m) => m.ProductComponent
      );
    },
    outlet: 'outlet2',
  },
  {
    path: 'userdashboard',
    loadComponent: () => {
      return import(
        './UserDashboard/userdashboard/userdashboard.component'
      ).then((m) => m.UserdashboardComponent);
    },
  },
  {
    path: 'billing',
    loadComponent: () => {
      return import('./UserDashboard/Sections/billing/billing.component').then(
        (m) => m.BillingComponent
      );
    },
    outlet: 'outlet2',
  },
];
