import { Component } from '@angular/core';
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faFacebook,faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-student-mentor-about',
  templateUrl: './student-mentor-about.component.html',
  styleUrls: ['./student-mentor-about.component.css']
})
export class StudentMentorAboutComponent {
  faFacebook = faFacebook;
  faTwitter= faTwitter;
  faLinkedin = faLinkedin;
  faGithub =faGithub;
  faEnvelope = faEnvelope;
  //Rating
  max = 10;
  rate = 7;
  isReadonly = false;
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
