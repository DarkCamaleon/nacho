import { Component, inject } from '@angular/core';
import CharactersComponent from './componentes/character-card/character-card.component';
import { characterService } from '../../services/rickmorty.service';
import  NavBarComponent  from '../../componentes/navbar/navbar';

@Component({
  selector: 'app-catalogo',
  imports: [CharactersComponent, NavBarComponent],
  templateUrl: './catalogo.component.html',

})
export class CatalogoComponent {

    personajes = inject(characterService).character;

    constructor(){
      console.log(this.personajes());
    }

 }
