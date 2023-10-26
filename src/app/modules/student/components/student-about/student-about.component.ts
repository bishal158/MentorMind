import { Component } from '@angular/core';
import {
  faArrowRight,
  faComments,
  faEnvelope,
  faIdBadge,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { StudentAboutService } from '../../../../services/student-services/student-about.service';

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
  student: any;
  protected readonly faComments = faComments;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faMobile = faMobile;
  protected readonly faFacebook = faFacebook;
  protected readonly faTwitter = faTwitter;
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faIdBadge = faIdBadge;

  constructor(private studentService: StudentAboutService) {
    this.studentService.students().subscribe((student) => {
      this.student = student;
    });
  }
}
