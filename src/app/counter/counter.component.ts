import { Component } from '@angular/core';
import { faKey, faEnvelope, faEyeSlash, faEye,faUser,faPhone,faHome,faUsers,faGraduationCap,faChalkboardTeacher,faBook} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faSquareFacebook, faSquareGithub, faGoogle, faLinkedin,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
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
  //Counter Variables
  total_users:number = 500;
  total_students:number = 475;
  total_mentors:number = 25;
  total_courses:number = 20;
  //Total users counter
  total_users_count:number =0;
  total_users_count_stop:any = setInterval(()=>{
    this.total_users_count++;
    if (this.total_users_count==this.total_users) {
      clearInterval(this.total_users_count_stop);
    }
  },5);
  //Total students counter
  total_students_count:number =0;
  total_students_count_stop:any = setInterval(()=>{
    this.total_students_count++;
    if (this.total_students_count==this.total_students) {
      clearInterval(this.total_students_count_stop);
    }
  },5);
  //Total mentors counter
  total_mentors_count:number =0;
  total_mentors_count_stop:any = setInterval(()=>{
    this.total_mentors_count++;
    if (this.total_mentors_count==this.total_mentors) {
      clearInterval(this.total_mentors_count_stop);
    }
  },130);
  //Total courses counter
  total_courses_count:number =0;
  total_courses_count_stop:any = setInterval(()=>{
    this.total_courses_count++;
    if (this.total_courses_count==this.total_courses) {
      clearInterval(this.total_courses_count_stop);
    }
  },130);
}
