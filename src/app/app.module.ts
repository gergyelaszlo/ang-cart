import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { routerConfig } from "./routes/routerConfig";
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
