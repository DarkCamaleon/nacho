import { Component, input } from '@angular/core';
import { CharacterApp } from '../../../../interfaces/character.interface';


@Component({
  selector: 'character-card',
  imports: [],
  templateUrl: './character-card.component.html',

})


export default class CharactersComponent {

   personaje = input<CharacterApp>();




}
