import { Injectable } from '@angular/core';
import { Iproduit } from './domain/iproduit';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  product_basket: Iproduit[] = [];

///
  private messageSource = new BehaviorSubject(0);
  count = this.messageSource.asObservable();

   
  ///
  constructor() { }

  addToBasket(p: Iproduit){

  this.product_basket.push(p);  
  this.messageSource.next(this.product_basket.length);  
  }
  getFromBasket(): Iproduit[]{
    return this.product_basket;
  }
  
  deleteFromBasket(p: string){
    this.product_basket = this.product_basket.filter(it => it.product_id !== p);
    this.messageSource.next(this.product_basket.length); 

   
    //this.totalArrayData = this.totalArrayData.filter(item => item.Id !== objectitem.id

  }
}
