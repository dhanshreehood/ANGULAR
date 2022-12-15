import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConvertSpaceToPipe } from './utility/convert-space-to.pipe';
import { SearchPipe } from './utility/search.pipe';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginTemplateDrivenComponent } from './components/login-template-driven/login-template-driven.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoDataComponent } from './components/demo-data/demo-data.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductByIdComponent } from './components/product-by-id/product-by-id.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DeleteAllProductComponent } from './components/delete-all-product/delete-all-product.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    ConvertSpaceToPipe,
    SearchPipe,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    LoginTemplateDrivenComponent,
    RegisterComponent,
    DemoDataComponent,
    AddProductComponent,
    ProductByIdComponent,
    DeleteProductComponent,
    EditProductComponent,
    DeleteAllProductComponent,
    ParentComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //responsible for performing the module
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
