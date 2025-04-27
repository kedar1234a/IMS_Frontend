import { Routes } from '@angular/router';
import { MyCartComponent } from './Pages/Electronics-Store/my-cart/my-cart.component';
import { AutomateBillingComponent } from './Pages/Electronics-Store/UserDashboard/Sections/billing/automate-billing/automate-billing.component';
import { ShowBillsComponent } from './Pages/Electronics-Store/UserDashboard/Sections/billing/show-bills/show-bills.component';
import { ElectronicsStoreHomeComponent } from './Pages/Electronics-Store/electronics-store-home/electronics-store-home.component';
import { UserdashboardComponent } from './Pages/Electronics-Store/UserDashboard/userdashboard/userdashboard.component';
import { LandingFooterComponent } from './Components/footer/landing-footer/landing-footer.component';

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
  {
    path:'landing',component:LandingFooterComponent
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
    path: 'electronics-user-dashboard-manual-billing',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Electronics-Store/UserDashboard/Sections/billing/manual-billing/manual-billing.component'
      ).then((m) => m.ManualBillingComponent);
    },
    outlet: 'outlet2',
  },
  {
    path: 'electronics-user-dashboard-auto-billing',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Electronics-Store/UserDashboard/Sections/billing/automate-billing/automate-billing.component'
      ).then((m) => m.AutomateBillingComponent);
    },
    // outlet: 'outlet2',
  },
  {
    path: 'electronics-user-dashboard-show-bills',
    pathMatch: 'full',
    loadComponent: () => {
      return import(
        './Pages/Electronics-Store/UserDashboard/Sections/billing/show-bills/show-bills.component'
      ).then((m) => m.ShowBillsComponent);
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
  {path:'electronics-myCart',component: MyCartComponent},
  {path:'electronics-showBilling', component: ShowBillsComponent, outlet:'outlet2'},
 {path:'electronics-autoBilling', component: AutomateBillingComponent, outlet:'outlet2'}
  


];

