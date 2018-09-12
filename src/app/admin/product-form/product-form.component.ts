import { Component, OnInit } from '@angular/core';
import { Icategorie } from '../../domain/icategorie';
import { CategorieService } from '../../categorie.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  data: Icategorie[];
  constructor(private _service: CategorieService) { }

  ngOnInit() {
    this._service.getcategorie().subscribe(res => this.data = res,
      erreur => console.log('ATTENTION Il y a l\'erreur : ' + erreur));
  }

}
