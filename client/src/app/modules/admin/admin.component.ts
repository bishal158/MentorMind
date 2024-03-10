import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

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

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  isCollapsed = false;
  windowScrolled = false;
  constructor(private scroller: ViewportScroller) {}
  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  go_to_top() {
    this.scroller.scrollToAnchor('side_nav');
  }

  protected readonly faArrowUp = faArrowUp;
  protected readonly faBarsStaggered = faBarsStaggered;
  protected readonly faSignOut = faSignOut;
  protected readonly faEye = faEye;
  protected readonly faUser = faUser;

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
  ];
}
