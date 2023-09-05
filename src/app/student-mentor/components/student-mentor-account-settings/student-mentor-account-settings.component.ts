import { Component } from '@angular/core';
import {faKey, faPen} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-student-mentor-account-settings',
  templateUrl: './student-mentor-account-settings.component.html',
  styleUrls: ['./student-mentor-account-settings.component.css']
})
export class StudentMentorAccountSettingsComponent {

  protected readonly faPen = faPen;
  protected readonly faKey = faKey;
}
