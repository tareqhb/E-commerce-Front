import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrdersSuccessComponent } from './orders-success/orders-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

import {LoginComponent } from './login/login.component';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AuthGuardService } from './auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategorieService } from './categorie.service';
import { CategoryComponent } from './category/category.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule, Route} from '@angular/router';
import { FormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { AllproductsComponent } from './allproducts/allproducts.component';

const routes: Route[] = [
  {path: '', component: HomeComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'orders-success', component: OrdersSuccessComponent },
  {path: 'basket', component: BasketComponent },
  {path: 'basket/:id', component: BasketComponent },
 // {path: 'tempo', redirectTo: 'basket' },
  {path: 'my/orders', component: MyOrdersComponent },
  {path: 'check-out', component: CheckOutComponent },
  {path: 'login', component: LoginComponent },
  {path: 'detailCategorie/:id', component : CategorydetailsComponent},
  {path: 'detailCategorie', component : AllproductsComponent},
  {path: 'admin/products', component: AdminProductsComponent },
  {path: 'admin/products/new', component: ProductFormComponent },
  {path: 'admin/orders', component: AdminOrdersComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    BasketComponent,
    CheckOutComponent,
    OrdersSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    SideBarComponent,
    ProductFormComponent,
    CategoryComponent,
     CategorydetailsComponent,
     AllproductsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes), 
    // RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}), 
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CategorieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
