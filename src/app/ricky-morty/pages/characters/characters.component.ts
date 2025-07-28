import { Component, inject } from '@angular/core';
import { characterService } from '../../../services/rickmorty.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.component.html',

})


export default class CharactersComponent {

  personajes = inject(characterService);

  constructor(){
     this.personajes.loadCharacter();
  }



}
