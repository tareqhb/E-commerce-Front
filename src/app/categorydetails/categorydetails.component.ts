import { Component, OnInit } from '@angular/core';
import { Icategorie } from '../domain/icategorie';
import { Subscription } from '../../../node_modules/rxjs';
import { CategorieService } from '../categorie.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { BasketService } from '../basket.service';

import { Iproduit } from '../domain/iproduit';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {

  category: Icategorie = {category_id: 0,category_name: '', products: []};
  code1: string = "Tous Les Categories";
  subscription: Subscription;

  constructor(private _route: ActivatedRoute,  private _service: CategorieService, private _panier: BasketService) { }

  ngOnInit() {

    this.subscription = this._route.paramMap.subscribe(res => {
                                              this.code1 = res.get('id');
                                             // console.log("==========> " + this.code1);
                                              this._service.getCategorieById(this.code1).subscribe(res2 => {
                                                this.category = res2;
                                                //  this.code =  this._route.snapshot.paramMap.get('id');
                                              });

                                              });

                                            
   
  }

  // navigateToList() {
  //   this._router.navigate(['/list']);
  // }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ajouterAuPanier(pp: Iproduit){
    this._panier.addToBasket(pp);

  }
  getQ(p: Iproduit): boolean {
    if (this._panier.product_basket.find(item => item.product_name === p.product_name) == null) {

      return true;

    } else {
      return false;
    }
  }

}
