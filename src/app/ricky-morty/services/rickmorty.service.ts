import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { CharacterApp } from "../interfaces/character.interface";
import { CharacterResponse } from "../interfaces/characterApi.interfaces";
import { CharacterMapper } from "../mapper/character.mapper";


@Injectable({ providedIn : 'root'})
export class characterService {

  private http = inject(HttpClient);
  url = 'https://rickandmortyapi.com/api';
  character = signal<CharacterApp[]>([]);


  constructor(){
    this.loadCharacter();
  }

  loadCharacter (){
    this.http.get<CharacterResponse>(`${ this.url }/character`).subscribe(
      (resp) => {

        const personajes = CharacterMapper.mapCharactersArray(resp.results);
        this.character.set(personajes);
        console.log("service responde : " , this.character());

      }
    )

  }


}