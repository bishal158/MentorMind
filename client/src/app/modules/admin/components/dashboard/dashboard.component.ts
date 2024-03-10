import { Component } from '@angular/core';
import {
  faChalkboardTeacher,
  faGraduationCap,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  protected readonly faUsers = faUsers;
  protected readonly faGraduationCap = faGraduationCap;
  protected readonly faChalkboardTeacher = faChalkboardTeacher;
  //Counter Variables
  total_users: any = 500;
  total_mentors: any = 30;
  total_mentees: any = 800;
  total_mentors_requests: any = 60;
  total_courses: any = 20;

  // counters

  total_users_counter: any = 0;
  total_users_counter_stop = setInterval(() => {
    this.total_users_counter++;
    if (this.total_users_counter === this.total_users) {
      clearInterval(this.total_users_counter_stop);
    }
  }, 5);

  total_mentors_counter: any = 0;
  total_mentors_counter_stop = setInterval(() => {
    this.total_mentors_counter++;
    if (this.total_mentors_counter === this.total_mentors) {
      clearInterval(this.total_mentors_counter_stop);
    }
  }, 5);

  total_mentees_counter: any = 0;
  total_mentees_counter_stop = setInterval(() => {
    this.total_mentees_counter++;
    if (this.total_mentees_counter === this.total_mentees) {
      clearInterval(this.total_mentees_counter_stop);
    }
  }, 5);

  total_mentors_requests_counter: any = 0;
  total_mentors_requests_counter_stop = setInterval(() => {
    this.total_mentors_requests_counter++;
    if (this.total_mentors_requests_counter === this.total_mentors_requests) {
      clearInterval(this.total_mentors_requests_counter_stop);
    }
  }, 5);
}
