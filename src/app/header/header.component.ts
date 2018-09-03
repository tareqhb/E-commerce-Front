import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  data: number ;
  user: 'tareq';
  isNavbarCollapsed = true;
  constructor(private _panier: BasketService) {

   }

   ngOnInit(): void {
    this._panier.count.subscribe (message => this.data = message);
  }
  logout() {
    this.user = null;
  }


 
}
