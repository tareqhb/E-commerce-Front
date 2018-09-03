import { Injectable } from '@angular/core';
import { Icategorie } from './domain/icategorie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  URL =  'http://localhost:8080/categories';
  constructor(private _http: HttpClient) {}


getcategorie(): Observable<Icategorie[]> {


  return this._http.get<Icategorie[]>(this.URL);
    // return [
    //   { code: 'p100', titre: 'Cafe', prixUnitaire: 5.5 },
    //   { code: 'p200', titre: 'Ice-Thé', prixUnitaire: 4.5 },
    //   { code: 'p300', titre: 'Jus', prixUnitaire: 7.5 }
    // ];
  }

  getCategorieById(id: string ): Observable<Icategorie> {
    return this._http.get<Icategorie>(this.URL + '/' + id);
  }

  addCategorie(cat: Icategorie): Observable<any> {
   return this._http.post(this.URL, cat);
  }
}
