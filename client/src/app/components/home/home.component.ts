import { Component } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faArrowUp = faArrowUp;

  constructor(
    private scroller: ViewportScroller,
    private router: Router,
  ) {}

  go_to_top() {
    this.scroller.scrollToAnchor('banner_top');
  }
}
