import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UpdateAccountInformationComponent } from './components/update-account-information/update-account-information.component';
import { AboutFormComponent } from './components/about-form/about-form.component';
import { AddThesisProjectComponent } from './components/add-thesis-project/add-thesis-project.component';
import { AddEducationalQualificationComponent } from './components/add-educational-qualification/add-educational-qualification.component';
import { AddSkillsAndSociallinksComponent } from './components/add-skills-and-sociallinks/add-skills-and-sociallinks.component';
import { WriteBlogsComponent } from './components/write-blogs/write-blogs.component';
import { AllYourBlogsComponent } from './components/all-your-blogs/all-your-blogs.component';
import { WatchOthersBlogsComponent } from './components/watch-others-blogs/watch-others-blogs.component';
import { ShareResourcesFormComponent } from './components/share-resources-form/share-resources-form.component';
import { ShowFullBlogComponent } from './components/show-full-blog/show-full-blog.component';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { AllMenteesComponent } from './components/all-mentees/all-mentees.component';
import { AllYourCoursesComponent } from './components/all-your-courses/all-your-courses.component';
import { CreateNewCoursesComponent } from './components/create-new-courses/create-new-courses.component';
import { WatchOthersCoursesComponent } from './components/watch-others-courses/watch-others-courses.component';
import { DesignYourCourseComponent } from './components/design-your-course/design-your-course.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { MenteesRequestsComponent } from './components/mentees-requests/mentees-requests.component';
@NgModule({
  declarations: [
    StudentMentorAboutComponent,
    StudentMentorComponent,
    StudentMentorAccountSettingsComponent,
    ChangePasswordComponent,
    UpdateAccountInformationComponent,
    AboutFormComponent,
    AddThesisProjectComponent,
    AddEducationalQualificationComponent,
    AddSkillsAndSociallinksComponent,
    WriteBlogsComponent,
    AllYourBlogsComponent,
    WatchOthersBlogsComponent,
    ShareResourcesFormComponent,
    ShowFullBlogComponent,
    AllMenteesComponent,
    AllYourCoursesComponent,
    CreateNewCoursesComponent,
    WatchOthersCoursesComponent,
    DesignYourCourseComponent,
    MenteesRequestsComponent,
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
    EditorComponent,
    AccordionModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StudentMentorModule {}
