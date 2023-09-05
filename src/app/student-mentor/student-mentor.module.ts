import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { StudentMentorAboutComponent } from './components/student-mentor-about/student-mentor-about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { StudentMentorComponent } from './student-mentor.component';
import { StudentMentorRoutingModule } from './student-mentor-routing.module';
import { StudentMentorAccountSettingsComponent } from './components/student-mentor-account-settings/student-mentor-account-settings.component';
@NgModule({
  declarations: [
    StudentMentorAboutComponent,
    StudentMentorComponent,
    StudentMentorAccountSettingsComponent,

  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule,
    CollapseModule,
    TabsModule,
    RatingModule,
    AlertModule,
    FormsModule,
    BsDropdownModule,
    ReactiveFormsModule,
    StudentMentorRoutingModule,
    NgOptimizedImage,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StudentMentorModule {}
