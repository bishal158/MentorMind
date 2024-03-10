import { Component } from '@angular/core';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public isCollapsed = true;
  protected readonly faBarsStaggered = faBarsStaggered;
  nav_items = [
    {
      id: 1,
      route: '/',
      routeName: 'Home',
    },
    {
      id: 2,
      route: '/notices',
      routeName: 'Notice Board',
    },
    {
      id: 3,
      route: '/courses',
      routeName: 'Courses',
    },
  ];
}
