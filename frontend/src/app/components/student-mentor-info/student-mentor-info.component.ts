import { Component } from '@angular/core';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-student-services-mentor-info',
  templateUrl: './student-mentor-info.component.html',
  styleUrls: ['./student-mentor-info.component.css'],
})
export class StudentMentorInfoComponent {
  //Rating
  max = 10;
  rate = 7;
  isReadonly = false;
  protected readonly faFacebook = faFacebook;
  protected readonly faTwitter = faTwitter;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faGithub = faGithub;

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }
}
