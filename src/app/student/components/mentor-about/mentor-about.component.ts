import { Component } from '@angular/core';
import {
  faCalendarDays,
  faEnvelope,
  faFileSignature,
  faImage,
  faLink,
  faMobile,
  faPenToSquare,
  faSchool,
  faTrash,
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
  //Rating
  max = 10;
  rate = 7;
  isReadonly = false;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faFacebook = faFacebook;
  protected readonly faImage = faImage;
  protected readonly faTwitter = faTwitter;
  protected readonly faTrash = faTrash;
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faSchool = faSchool;
  protected readonly faFileSignature = faFileSignature;
  protected readonly faLink = faLink;
  protected readonly faCalendarDays = faCalendarDays;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faMobile = faMobile;

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
}
