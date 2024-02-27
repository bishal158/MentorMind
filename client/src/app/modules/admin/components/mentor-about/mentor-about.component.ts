import { Component } from '@angular/core';
import {
  faArrowRight,
  faCalendarDays,
  faCircleCheck,
  faEnvelope,
  faFileSignature,
  faLink,
  faMobile,
  faSchool,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-mentor-about',
  templateUrl: './mentor-about.component.html',
  styleUrls: ['./mentor-about.component.css'],
})
export class MentorAboutComponent {
  course_status = 'In Progress';
  course_author = 'Mafuj Ahmed Bishal';
  //Rating
  max = 10;
  rate = 7;
  isReadonly = false;
  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
      console.log(this.rate);
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }

  protected readonly faArrowRight = faArrowRight;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faSpinner = faSpinner;
  protected readonly faCalendarDays = faCalendarDays;
  protected readonly faLink = faLink;
  protected readonly faFileSignature = faFileSignature;
  protected readonly faSchool = faSchool;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faGithub = faGithub;
  protected readonly faTwitter = faTwitter;
  protected readonly faFacebook = faFacebook;
  protected readonly faMobile = faMobile;
  protected readonly faEnvelope = faEnvelope;
}
