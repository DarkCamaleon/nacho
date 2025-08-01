import { CharacterApp } from "../interfaces/character.interface";
import { character } from "../interfaces/characterApi.interfaces";



export class CharacterMapper{
  static mapCharacter( personaje : character ):CharacterApp {
    return {
      id : personaje.id,
      name : personaje.name,
      image : personaje.image,
      created : personaje.created,
      location : {
        name : personaje.location.name

      }

    }
  }

  static mapCharactersArray( personajes : character[]):CharacterApp[]{
    return personajes.map(this.mapCharacter);
  }
}