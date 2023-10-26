import { Component } from '@angular/core';
import {
  faArrowRight,
  faEye,
  faFilter,
  faSearch,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-mentors',
  templateUrl: './all-mentors.component.html',
  styleUrls: ['./all-mentors.component.css'],
})
export class AllMentorsComponent {
  //Rating
  max = 10;
  rate = 7;
  isReadonly = true;
  protected readonly faSearch = faSearch;
  protected readonly faFilter = faFilter;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faEye = faEye;
  protected readonly faUserPlus = faUserPlus;

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      // this.isReadonly = true;
      // console.log(this.rate);
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }
}
