import { Component, OnInit } from '@angular/core';

import {
  faBarsStaggered,
  faSignOut,
  faArrowUp,
  faEye,
  faUser,
  faHome,
  faClipboard,
  faChalkboardTeacher,
  faUserPlus,
  faGraduationCap,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { user } from '../../constants/constants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  protected readonly faArrowUp = faArrowUp;
  protected readonly faBarsStaggered = faBarsStaggered;
  protected readonly faSignOut = faSignOut;
  protected readonly faEye = faEye;
  protected readonly faUser = faUser;
  isCollapsed = false;
  windowScrolled = false;
  AdminInfo: any = null;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    let userInfo = localStorage.getItem(user);
    // console.log(userInfo);
    if (userInfo) {
      this.AdminInfo = JSON.parse(userInfo);
    } else {
      this.AdminInfo = {};
    }
  }
  go_to_top() {
    window.scrollTo(0, 0);
  }
  sideBarItems = [
    {
      routerLink: '/admin/dashboard',
      routeName: 'Dashboard',
      icon: faHome,
    },
    {
      routerLink: '/admin/mentor-requests',
      routeName: 'Mentor Requests',
      icon: faUserPlus,
    },
    {
      routerLink: '/admin/all-mentors',
      routeName: 'All Mentors',
      icon: faChalkboardTeacher,
    },
    {
      routerLink: '/admin/all-mentees',
      routeName: 'All Mentees',
      icon: faGraduationCap,
    },
    {
      routerLink: '/admin/post-notice',
      routeName: 'Notice Board',
      icon: faClipboard,
    },
    {
      routerLink: '/admin/all-cv-resume',
      routeName: 'Uploaded Cv/Resume',
      icon: faFile,
    },
    // {
    //   routerLink: '/',
    //   routeName: 'Logout',
    //   icon: faSignOut,
    // }
  ];
}
