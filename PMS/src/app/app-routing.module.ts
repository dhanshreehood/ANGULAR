import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { DemoDataComponent } from './components/demo-data/demo-data.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginTemplateDrivenComponent } from './components/login-template-driven/login-template-driven.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductByIdComponent } from './components/product-by-id/product-by-id.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{path: "home", component: HomeComponent},
{path:"products", component:ProductComponent},
{path:"getProduct/:id", component:ProductDetailsComponent}, 
{path:"login", component:LoginTemplateDrivenComponent}, 
{path:"register", component:RegisterComponent}, 
{path:"demo", component:DemoDataComponent}, 
{path:"addProduct", component:AddProductComponent}, 
{path:"getProductById/:id", component:ProductByIdComponent}, 
{path:"deleteProductById/:id", component:DeleteProductComponent}, 
{path:"editProductById/:id", component:EditProductComponent}, 

{path:"", component:RegisterComponent}, 

{path:'',redirectTo:"/home", pathMatch:'full'},  
{path:'**',component:PageNotFoundComponent } 
];// assuming unique product id; it will render to that specific product detail.
//it will check the url; if u provide other characters other than '' it will not work
//it must be the last rout in the Routes. // '*' means anything

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
