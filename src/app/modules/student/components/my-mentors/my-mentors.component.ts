import { Component } from '@angular/core';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-mentors',
  templateUrl: './my-mentors.component.html',
  styleUrls: ['./my-mentors.component.css'],
})
export class MyMentorsComponent {
  //Rating
  max = 10;
  rate = 7;
  isReadonly = true;
  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;

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
