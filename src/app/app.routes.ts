import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path : 'personajes',
    loadComponent: () =>
          import('./ricky-morty/pages/catalogo/componentes/character-card/character-card.component'),
  }
];
