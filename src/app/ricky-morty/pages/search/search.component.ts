import {  Component, inject, output } from '@angular/core';
import NavBarComponent from '../../componentes/navbar/navbar';
import { characterService } from '../../services/rickmorty.service';

@Component({
  selector: 'app-search',
  imports: [NavBarComponent],
  templateUrl: './search.component.html',

})
export default class SearchComponent {

  showInputNavBar  :  boolean = false;
}
