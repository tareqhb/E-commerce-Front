import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduit } from './domain/iproduit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  URL =  'http://localhost:8080/products/';
  constructor(private _http: HttpClient) {}


  getProduits(): Observable<Iproduit[]> {
  return this._http.get<Iproduit[]>(this.URL);
    // return [
    //   { code: 'p100', titre: 'Cafe', prixUnitaire: 5.5 },
    //   { code: 'p200', titre: 'Ice-Thé', prixUnitaire: 4.5 },
    //   { code: 'p300', titre: 'Jus', prixUnitaire: 7.5 }
    // ];
  }

  getProduitById(id: string ): Observable<Iproduit> {
    return this._http.get<Iproduit>(this.URL + id);
  }

  addProduit(produit: Iproduit): Observable<any> {
   return this._http.post(this.URL, produit);
  }
}
