import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../service/api.service";
import { CartService } from "../../service/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList: any;
  public filterCategory: any;
  searchKey: string = "";

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total: a.price});
        });
        this.cartService.search.subscribe((val: any) => {
          this.searchKey = val;
        });
      });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == "") {
          return a;
        }
      });
  }

}
