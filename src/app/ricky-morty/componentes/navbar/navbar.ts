import {  Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',

})
export default class NavBarComponent {

  showInput = true;

  removerInput( estado : boolean){
    this.showInput = false;
  }
}
