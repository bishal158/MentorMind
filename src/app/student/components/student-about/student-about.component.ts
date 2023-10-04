import { Component } from '@angular/core';
import {
  faArrowRight,
  faCalendarDays,
  faCircleInfo,
  faComments,
  faEnvelope,
  faFileSignature,
  faLink,
  faMobile,
  faPhone,
  faSchool,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-student-about',
  templateUrl: './student-about.component.html',
  styleUrls: ['./student-about.component.css'],
})
export class StudentAboutComponent {
  //Rating
  max = 10;
  rate = 6;
  isReadonly = false;
  protected readonly faComments = faComments;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faPhone = faPhone;
  protected readonly faMobile = faMobile;
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faFacebook = faFacebook;
  protected readonly faTwitter = faTwitter;
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faSchool = faSchool;
  protected readonly faFileSignature = faFileSignature;
  protected readonly faCalendarDays = faCalendarDays;
  protected readonly faLink = faLink;
}
