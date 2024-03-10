import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapse, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { CoursesModule } from '../courses/courses.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MentorRequestsComponent } from './components/mentor-requests/mentor-requests.component';
import { AllMentorsComponent } from './components/all-mentors/all-mentors.component';
import { AllMenteesComponent } from './components/all-mentees/all-mentees.component';
import { PostNoticeComponent } from './components/post-notice/post-notice.component';
import { AllCvResumeComponent } from './components/all-cv-resume/all-cv-resume.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MentorRequestFilterPipe } from './components/mentor-requests/mentor-request-filter.pipe';
import { MentorAboutComponent } from './components/mentor-about/mentor-about.component';
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    MentorRequestsComponent,
    AllMentorsComponent,
    AllMenteesComponent,
    PostNoticeComponent,
    AllCvResumeComponent,
    MentorRequestFilterPipe,
    MentorAboutComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgbCollapse,
    CollapseModule,
    FontAwesomeModule,
    CollapseModule,
    NgbCollapse,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    TabsModule,
    HttpClientModule,
    AlertModule,
    EditorComponent,
    CoursesModule,
    TooltipModule,
    NgbTooltipModule,
  ],
})
export class AdminModule {}
