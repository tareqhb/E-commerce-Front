import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  productsFromBasket;
  subscription: Subscription;
 code1: string;

 

  constructor( private _panier: BasketService,private _route: ActivatedRoute, private _router: Router) {

    this.productsFromBasket = _panier.getFromBasket();
   }


  ngOnInit() {
    // this._route.queryParams.subscribe(vv => {});
    this.subscription = this._route.paramMap.subscribe(res => {
      this.code1 = res.get('id');
     // console.log("==========> " + this.code1);
      

      });

  
    
    //this.refresh();
  }

  refresh(){
    if (this.code1!== "1"){
    this._router.navigate(["/basket/"+(this.code1+1)]);
    //this._router.navigate(["/basket"]);
  }else{
    this._router.navigate(["/basket"]);
  }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteFromHere(ids: string){

    this._panier.deleteFromBasket(ids);
    this.refresh();
    //this.refresh2();
    //this._router.navigate(["/basket"]);
    
  }

}
