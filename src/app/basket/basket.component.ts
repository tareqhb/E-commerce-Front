import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  productsFromBasket;
  subscription: Subscription;
 
 

  constructor( private _panier: BasketService,private _route: ActivatedRoute) {

    this.productsFromBasket = _panier.getFromBasket();
   }


  ngOnInit() {
  //   this.subscription = this._route.paramMap.subscribe(res => {
  //     this.productsFromBasket = res;
  // });
  }

  deleteFromHere(ids: string){

    this._panier.deleteFromBasket(ids);
    
  }

}
