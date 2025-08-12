import { Component, input } from '@angular/core';
import { CharacterApp } from '../../../../interfaces/character.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'character-card',
  imports: [NgClass],
  templateUrl: './character-card.component.html',

})


export default class CharactersComponent {

   personaje = input<CharacterApp>();
   // input espera un valor

   ngOnInit(){
      this.verPersonajes();
   }

   verPersonajes (){

      const lospersonajes = this.personaje();

      console.log({lospersonajes});
   }





}


