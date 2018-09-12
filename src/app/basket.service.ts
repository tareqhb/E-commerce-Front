import { Injectable } from '@angular/core';
import { Iproduit } from './domain/iproduit';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '../../node_modules/@angular/router';
import { purePipeDef } from '../../node_modules/@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  product_basket: Iproduit[] = [];
  countBasket: number = 0;

  private messageSource = new BehaviorSubject(0);
  count = this.messageSource.asObservable();
  productToDelete: Iproduit;
  productTest: Iproduit;


  constructor() { }

  updateBasket() {
    this.messageSource.next(this.countBasket);
    this.count = this.messageSource.asObservable();
  }
  addToBasket(p: Iproduit) {
    this.productTest = this.product_basket.find(item => item.product_id === p.product_id);

    if (this.productTest != null) {

      this.productTest.product_Q_Basket = this.productTest.product_Q_Basket + 1;

    }

    else {
      this.product_basket.push(p);

      p.product_Q_Basket = 1;

    }
    this.countBasket++;
    this.messageSource.next(this.countBasket);

  }
  getFromBasket(): Iproduit[] {
    return this.product_basket;
  }

  deleteFromBasket(p: Iproduit) {

    this.productToDelete = this.product_basket.find(item => item.product_name === p.product_name);
    console.log(this.productToDelete.product_name);
    this.product_basket = this.product_basket.filter(it => it.product_id !== p.product_id);
    //this.countBasket = this.countBasket - this.productToDelete.product_Q_Basket
    this.countBasket = this.countBasket - this.productToDelete.product_Q_Basket;
    this.messageSource.next(this.countBasket);


    //this.totalArrayData = this.totalArrayData.filter(item => item.Id !== objectitem.id

  }
}
