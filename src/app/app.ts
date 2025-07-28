import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import CharactersComponent from './ricky-morty/pages/characters/characters.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharactersComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'rickandmorty';
}
