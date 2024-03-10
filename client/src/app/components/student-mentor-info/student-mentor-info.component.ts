import { Component } from '@angular/core';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
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

@Component({
  selector: 'app-student-services-mentor-info',
  templateUrl: './student-mentor-info.component.html',
  styleUrls: ['./student-mentor-info.component.css'],
})
export class StudentMentorInfoComponent {
  course_status = 'In Progress';
  course_author = 'Mafuj Ahmed Bishal';
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

  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faSpinner = faSpinner;
  protected readonly faCalendarDays = faCalendarDays;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLink = faLink;
  protected readonly faFileSignature = faFileSignature;
  protected readonly faSchool = faSchool;
  protected readonly faMobile = faMobile;
}
