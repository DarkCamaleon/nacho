import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";


@Injectable({ providedIn : 'root'})
export class characterService {

  private http = inject(HttpClient);
  url = 'https://rickandmortyapi.com/api';
  character = signal<any[]>([]);

  constructor(){
    // this.loadCharacter();
  }

  loadCharacter ():void{
    this.http.get(`${ this.url }/character`).subscribe(
      (resp:any) => {
        console.log(resp.results);
        this.character.set(resp.results);

      }
    )

  }


}