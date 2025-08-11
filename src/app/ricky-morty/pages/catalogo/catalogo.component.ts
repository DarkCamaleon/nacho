import { Component, inject, input, output, Signal } from '@angular/core';
import CharactersComponent from './componentes/character-card/character-card.component';
import { characterService } from '../../services/rickmorty.service';
import  NavBarComponent  from '../../componentes/navbar/navbar';
import { CharacterApp } from '../../interfaces/character.interface';

@Component({
  selector: 'app-catalogo',
  imports: [CharactersComponent, NavBarComponent],
  templateUrl: './catalogo.component.html',

})
export default class CatalogoComponent {

    personajes  = inject(characterService).character;
    showInputNavBar  :  boolean = true;
    constructor(){
      console.log(this.personajes());
    }


 }
