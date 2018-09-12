import { Component } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Iproduit } from '../domain/iproduit';
import { BasketService } from '../basket.service';



@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {

  produits;
  test: boolean = false;

  constructor(private _service: ProduitService, private _panier: BasketService) {

    this.produits = _service.getProduits();
  }

  ajouterAuPanier(pp: Iproduit) {
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
