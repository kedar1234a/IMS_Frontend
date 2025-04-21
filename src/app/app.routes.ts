import { Routes } from '@angular/router';

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
    path: 'user-profile',
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
  {
    path: 'electronics-add-to-cart',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Electronics-Store/electronics-add-to-cart/electronics-add-to-cart.component'
      ).then((m) => m.ElectronicsAddToCartComponent);
    },
  },
  // <--------------------- Electronics Store Dashboard Routes --------------------->
  {
    path: 'electronics-user-dashboard',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Electronics-Store/UserDashboard/userdashboard/userdashboard.component'
      ).then((m) => m.UserdashboardComponent);
    },
  },
  {
    path: 'electronics-user-dashboard-home',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Electronics-Store/UserDashboard/Sections/home/home.component'
      ).then((m) => m.HomeComponent);
    },
    outlet: 'outlet2',
  },
  {
    path: 'electronics-user-dashboard-product',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Electronics-Store/UserDashboard/Sections/product/product.component'
      ).then((m) => m.ProductComponent);
    },
    outlet: 'outlet2',
  },
  {
    path: 'electronics-user-dashboard-billing',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Electronics-Store/UserDashboard/Sections/billing/billing.component'
      ).then((m) => m.BillingComponent);
    },
    outlet: 'outlet2',
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

  // <--------------------- Grocery Store Dashboard Routes --------------------->
  
  {
    path: 'grocery-user-dashboard',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Grocery-Store/UserDashboard/userdashboard/userdashboard.component'
      ).then((m) => m.UserdashboardComponent);
    },

  },
  {
    path: 'grocery-user-dashboard-home',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Grocery-Store/UserDashboard/Sections/home/home.component'
      ).then((m) => m.HomeComponent);
    },
    outlet: 'outlet2',
  },
  {
    path: 'grocery-user-dashboard-product',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Grocery-Store/UserDashboard/Sections/product/product.component'
      ).then((m) => m.ProductComponent);
    },
    outlet: 'outlet2',
  },
  {
    path: 'grocery-user-dashboard-billing',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Grocery-Store/UserDashboard/Sections/billing/billing.component'
      ).then((m) => m.BillingComponent);
    },
    outlet: 'outlet2',
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
  // <--------------------- Grocery Store Dashboard Routes --------------------->
  
  {
    path: 'industrial-hardware-user-dashboard',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Industrial-Hardware-Store/UserDashboard/userdashboard/userdashboard.component'
      ).then((m) => m.UserdashboardComponent);
    },
  
  },
  {
    path: 'industrial-hardware-user-dashboard-home',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Industrial-Hardware-Store/UserDashboard/Sections/home/home.component'
      ).then((m) => m.HomeComponent);
    },
    outlet: 'outlet2',
  },
  {
    path: 'industrial-hardware-user-dashboard-product',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Industrial-Hardware-Store/UserDashboard/Sections/product/product.component'
      ).then((m) => m.ProductComponent);
    },
    outlet: 'outlet2',
  },
  {
    path: 'industrial-hardware-user-dashboard-billing',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Industrial-Hardware-Store/UserDashboard/Sections/billing/billing.component'
      ).then((m) => m.BillingComponent);
    },
    outlet: 'outlet2',
  },

];

