import { Component } from '@angular/core';
import {faCircleInfo, faHashtag, faKey, faNoteSticky, faPen, faSchool} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-student-mentor-account-settings',
  templateUrl: './student-mentor-account-settings.component.html',
  styleUrls: ['./student-mentor-account-settings.component.css']
})
export class StudentMentorAccountSettingsComponent {

  protected readonly faPen = faPen;
  protected readonly faKey = faKey;
  protected readonly faSchool = faSchool;
  protected readonly faNoteSticky = faNoteSticky;
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faHashtag = faHashtag;
}
