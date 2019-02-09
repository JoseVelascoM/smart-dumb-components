import { Component, OnInit } from '@angular/core';
import { CommonState } from '../shared/common-state';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  contacts: Array<any>;

  constructor() { }

  ngOnInit() {
    this.contacts = CommonState.favorites;
  }

}
