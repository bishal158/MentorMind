import { Component } from '@angular/core';
import { faBarsStaggered,faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {
  public faBarsStaggered = faBarsStaggered;
  public faBars = faBars;


  isCollapsed =false;
}
