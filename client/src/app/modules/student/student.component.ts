import { Component } from '@angular/core';
import {
  faArrowUp,
  faBarsStaggered,
  faBook,
  faBookOpenReader,
  faChalkboardUser,
  faDownload,
  faEye,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  public faBarsStaggered = faBarsStaggered;
  isCollapsed = false;
  windowScrolled = false;
  open_inner_item = true;
  protected readonly faEye = faEye;
  protected readonly faSignOut = faSignOut;
  protected readonly faUser = faUser;
  protected readonly faChalkboardUser = faChalkboardUser;
  protected readonly faDownload = faDownload;
  protected readonly faBookOpenReader = faBookOpenReader;
  protected readonly faBook = faBook;
  protected readonly faArrowUp = faArrowUp;
  constructor(private scroller: ViewportScroller) {}

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  go_to_top() {
    this.scroller.scrollToAnchor('side_nav');
  }
}
