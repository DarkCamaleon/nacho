import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path : 'catalogo',
    loadComponent: () =>
          import('./ricky-morty/pages/catalogo/catalogo.component'),
  },
   {
    path : 'contacto',
    loadComponent: () =>
          import('./ricky-morty/pages/search/search.component'),
  },
   {
        path : '**',
        redirectTo: 'catalogo',
      }

];
