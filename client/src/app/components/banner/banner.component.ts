import { Component } from '@angular/core';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import * as Aos from 'aos';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faArrowRight = faArrowRight;

  socials = [
    {
      url: 'https://www.facebook.com/greenuniversitybd',
      icon: faFacebook,
      color: '#566fb2',
    },
    {
      url: 'https://www.facebook.com/greenuniversitybd',
      icon: faTwitter,
      color: '#2d83e5',
    },
    {
      url: 'https://www.facebook.com/greenuniversitybd',
      icon: faLinkedin,
      color: '#0077b5',
    },
  ];
  constructor(
    private scroller: ViewportScroller,
    private router: Router,
  ) {}

  ngOnInit() {
    Aos.init();
  }

  go_to_counter() {
    this.scroller.scrollToAnchor('banner_last');
  }
}
