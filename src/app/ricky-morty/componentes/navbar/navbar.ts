import {  Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',

})
export default class NavBarComponent {

  showSearchNavBar = input<boolean>(false);

}
