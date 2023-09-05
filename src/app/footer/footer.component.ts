import { Component } from '@angular/core';
import { faKey, faEnvelope, faEyeSlash, faEye,faUser,faPhone,faHome,faUsers,faGraduationCap,faChalkboardTeacher,faBook} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faSquareFacebook, faSquareGithub, faGoogle, faLinkedin,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faEnvelope =faEnvelope;
  faUsers = faUsers;
  faPhone=faPhone;
  faLinkedin= faLinkedin;
  faGoogle=faGoogle;
  faHome= faHome;
  faSquareGithub=faSquareGithub;
  faSquareFacebook = faSquareFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faGraduationCap = faGraduationCap;
  faChalkboardTeacher = faChalkboardTeacher;
  faBook = faBook;
  faFacebook = faFacebook;
}
