import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsReadComponent } from './components/products-read/products-read.component';
import { ProductsUpdateComponent } from './components/products-update/products-update.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/create", component: ProductsCreateComponent },
  { path: "products/read", component: ProductsReadComponent },
  { path: "products/update/:id", component: ProductsUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
