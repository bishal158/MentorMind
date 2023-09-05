import { Component } from '@angular/core';
import { faKey, faEnvelope, faEyeSlash, faEye,faUser,faPhone,faHome,faUsers,faGraduationCap,faChalkboardTeacher,faBook, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faSquareFacebook, faSquareGithub, faGoogle, faLinkedin,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons'
import * as Aos from 'aos';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  ngOnInit(){
    Aos.init();
  }
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
  faArrowRight = faArrowRight;
}
