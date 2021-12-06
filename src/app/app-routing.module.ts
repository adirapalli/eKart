import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { PageCannotFoundComponent } from './page-cannot-found/page-cannot-found.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/products'},
  {path:'products', component:ProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'logIn', component:LogInComponent},
  {path:'signUp', component:SignUpComponent},
  {path:'profile', component:ProfileComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'editProduct', component:EditProductsComponent},
  {path:'**', component:PageCannotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
