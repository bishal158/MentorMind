import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentAboutComponent } from './components/student-about/student-about.component';
import { StudentComponent } from './student.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    StudentAboutComponent,
    StudentComponent,

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FontAwesomeModule,
    CollapseModule,
    NgbCollapse,
  ]
})
export class StudentModule { }
