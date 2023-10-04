import { Component } from '@angular/core';
import {
  faArrowAltCircleUp,
  faArrowUp,
  faBook,
  faChalkboardTeacher,
  faEnvelope,
  faGraduationCap,
  faHome,
  faPhone,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faEnvelope = faEnvelope;
  faUsers = faUsers;
  faPhone = faPhone;
  faLinkedin = faLinkedin;
  faGoogle = faGoogle;
  faHome = faHome;
  faSquareGithub = faSquareGithub;
  faSquareFacebook = faSquareFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faGraduationCap = faGraduationCap;
  faChalkboardTeacher = faChalkboardTeacher;
  faBook = faBook;
  faFacebook = faFacebook;
  protected readonly faArrowAltCircleUp = faArrowAltCircleUp;
  protected readonly faArrowUp = faArrowUp;

  constructor(
    private scroller: ViewportScroller,
    private router: Router,
  ) {}

  go_to_top() {
    this.scroller.scrollToAnchor('banner_top');
  }
}
