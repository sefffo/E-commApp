import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { ProductsComponent } from './features/pages/products/products.component';
import { CartComponent } from './features/pages/cart/cart.component';
import { CatComponent } from './features/pages/cat/cat.component';
import { LogInComponent } from './features/auth/log-in/log-in.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { NotfoundComponent } from './features/layout/notfound/notfound.component';
// import { BrandsComponent } from './features/pages/brands/brands.component';
import { authGuard } from './core/Gurd/auth.guard';
import { ProductDetailsComponent } from './features/pages/product-details/product-details.component';
import { AllordersComponent } from './features/pages/allorders/allorders.component';
import { AddresComponent } from './features/pages/addres/addres.component';
import { RxjsTestingComponent } from './features/pages/rxjs testing/rxjs-testing/rxjs-testing.component';
import { ForgetPassComponent } from './features/auth/Forget Pass/forget-pass/forget-pass.component';
import { VerifyCodeComponent } from './features/auth/verifyCode/verify-code/verify-code.component';
import { PassResetComponent } from './features/auth/pass-reset/pass-reset.component';

export const routes: Routes = [

    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent,canActivate:[authGuard],title:'Home'},
    {path:'rxjs', component:RxjsTestingComponent,canActivate:[authGuard],title:'testing rxjs'},
    {path:'products', component:ProductsComponent,canActivate:[authGuard],title:'Products'},  
    {path:'cart', component:CartComponent ,canActivate:[authGuard] ,title:'Cart'},
    {path:'categories', component:CatComponent ,canActivate:[authGuard] ,title:'Categories'},

    //Lazy Loading 
    {path:'brands', loadComponent:()=>import("./features/pages/brands/brands.component").then(Brands=>Brands.BrandsComponent) ,canActivate:[authGuard] ,title:'Brands'},
    {path:'settings',loadChildren:()=>import("./shared/settings module/settings/settings.module").then(Settings=>Settings.SettingsModule) ,canActivate:[authGuard] ,title:'Settings'},
    
    {path :'productDetails/:id', component:ProductDetailsComponent ,canActivate:[authGuard] ,title:'Product Details'},
    {path :'allorders', component:AllordersComponent ,canActivate:[authGuard] ,title:'All Orders'},
    //3shan el checkout
    {path :'addres/:cartId', component:AddresComponent,canActivate:[authGuard] ,title:'adress'},


    
    {path:'login', component:LogInComponent , title:'Login'},
    {path:'register', component:RegisterComponent , title:'Register'},
    {path:'forget-pass', component:ForgetPassComponent , title:'Forget Password'},
    {path:'verify', component:VerifyCodeComponent , title:'verify you Code'},
    {path:'resetPass', component:PassResetComponent , title:'Reset Password'},

    {path:'**', component:NotfoundComponent},



];
