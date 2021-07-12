import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ArchiveComponent } from './orders/archive/archive.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { SearchFoodComponent } from './search-food/search-food.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search-food', component: SearchFoodComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'create-order', component: CreateOrderComponent},
  {path: 'edit-order', component: EditOrderComponent},
  {path: 'my-orders', component: MyOrdersComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'archive', component: ArchiveComponent}
];

@NgModule ({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
