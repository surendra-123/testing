import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlaystoreComponent } from './playstore/playstore.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'playstore',component:PlaystoreComponent},
  { path: 'cart',component:CartComponent},
  { path: 'order',component:OrderComponent},
  { path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
