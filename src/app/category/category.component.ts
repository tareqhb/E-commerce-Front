import { Component, OnInit } from '@angular/core';
import { Icategorie } from '../domain/icategorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data: Icategorie[];
  
  constructor(private _service: CategorieService) { }

  ngOnInit() {
    this._service.getcategorie().subscribe(res => this.data = res,
   erreur => console.log('ATTENTION Il y a l\'erreur : ' + erreur));

     // this.data = this._service.getProduits();
   }

}
