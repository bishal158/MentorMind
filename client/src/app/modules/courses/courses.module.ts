import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { ShowCoursesComponent } from './components/show-courses/show-courses.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [CoursesComponent, ShowCoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FontAwesomeModule,
    CollapseModule,
    NgbCollapse,
    AccordionModule,
  ],
})
export class CoursesModule {}
