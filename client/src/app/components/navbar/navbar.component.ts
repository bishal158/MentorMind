import { Component, OnInit } from '@angular/core';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { user } from '../../constants/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  protected readonly faBarsStaggered = faBarsStaggered;
  UserInfo: any = null;
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

  ngOnInit(): void {
    let User = localStorage.getItem(user);
    if (User) {
      this.UserInfo = JSON.parse(User);
    } else {
      this.UserInfo = {};
    }
  }
}
