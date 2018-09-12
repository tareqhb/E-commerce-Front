import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';
import { Iproduit } from '../domain/iproduit';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  productsFromBasket;
  subscription: Subscription;
  code1: string;

  total: number = 0;
  total1: number = 0;

  constructor(private _panier: BasketService, private _route: ActivatedRoute, private _router: Router) {

    this.productsFromBasket = _panier.getFromBasket();
    this.productsFromBasket.forEach(e => {
      this.total += e.product_price_buy * e.product_Q_Basket
      console.log("ttttttttttt" + this.total);
    });
  }


  ngOnInit() {
    // this._route.queryParams.subscribe(vv => {});
    this.subscription = this._route.paramMap.subscribe(res => {
      this.code1 = res.get('id');
    });

    //this.refresh();
  }

  refresh() {
    if (this.code1 !== "1") {
      this._router.navigate(["/basket/" + (this.code1 + 1)]);
      //this._router.navigate(["/basket"]);
    } else {
      this._router.navigate(["/basket"]);
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteFromHere(ids: Iproduit) {

    this._panier.deleteFromBasket(ids);
    this.refresh();
    //this.refresh2();
    //this._router.navigate(["/basket"]);

  }
  onChangeQ(qtt: number, prix: number) {
    this.total = qtt * prix;
  }

  testOnChange(event: any) {
    this.total = 0;
    this.total1 = 0;
    this.productsFromBasket.forEach(e => {
      this.total += e.product_price_buy * e.product_Q_Basket
      this.total1 += e.product_Q_Basket;
      this._panier.countBasket = this.total1;
      this._panier.updateBasket();
    
    });
  }

  // testOnChangeBasket(event: any) {
  //   this.total1 = 0;
  //   this.productsFromBasket.forEach(e => {
  //     this.total1 += e.product_Q_Basket;
  //     this._panier.countBasket = this.total1;
  //     this._panier.updateBasket();
  //   });
  // }

}
