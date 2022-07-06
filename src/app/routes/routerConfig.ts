import { Routes } from "@angular/router";
import { CartComponent } from "../components/cart/cart.component";
import { ProductComponent } from "../components/product/product.component";

export const routerConfig: Routes = [
  {
    path: "",
    redirectTo: "/products",
    pathMatch: "full"
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];
