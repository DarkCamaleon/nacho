import { Component, inject } from '@angular/core';
import CharactersComponent from './componentes/character-card/character-card.component';
import { characterService } from '../../services/rickmorty.service';

@Component({
  selector: 'app-catalogo',
  imports: [CharactersComponent],
  templateUrl: './catalogo.component.html',

})
export class CatalogoComponent {

    personajes = inject(characterService);

    constructor(){
      console.log(this.personajes);
    }

 }
