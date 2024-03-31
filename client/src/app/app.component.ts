import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  windowScrolled: boolean = false;
  constructor() {
    Aos.init();
  }
  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }
  go_to_top() {
    window.scrollTo(0, 0);
  }
  protected readonly faArrowUp = faArrowUp;
}
