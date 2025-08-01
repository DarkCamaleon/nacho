import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './ricky-morty/pages/catalogo/catalogo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CatalogoComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'rickandmorty';
}
