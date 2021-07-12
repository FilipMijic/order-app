import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrdersComponent } from './orders/orders.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { ProfileComponent } from './profile/profile.component';
import { RateOrderComponent } from './orders/my-orders/rate-order/rate-order.component';
import { ArchiveComponent } from './orders/archive/archive.component';
import { OrderService } from './orders/order.service';
import { from } from 'rxjs';
import { DeleteOrderComponent } from './orders/my-orders/delete-order/delete-order.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { FoodService } from './search-food/food.service';
import { UserService } from './auth/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    OrdersComponent,
    MyOrdersComponent,
    CreateOrderComponent,
    EditOrderComponent,
    ProfileComponent,
    RateOrderComponent,
    ArchiveComponent,
    DeleteOrderComponent,
    SearchFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, OrderService, FoodService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteOrderComponent, RateOrderComponent, ProfileComponent]
})
export class AppModule { }
