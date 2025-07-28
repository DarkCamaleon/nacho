import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";


@Injectable({ providedIn : 'root'})
export class characterService {

  private http = inject(HttpClient);
  url = 'https://rickandmortyapi.com/api';

  constructor(){
    // this.loadCharacter();
  }

  loadCharacter ():void{
    this.http.get(`${ this.url }/character`).subscribe(
      (resp) => {
        console.log(resp);
      }
    )

  }


}