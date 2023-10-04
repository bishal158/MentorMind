import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentAboutComponent } from './components/student-about/student-about.component';
import { StudentComponent } from './student.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { WatchBlogsComponent } from './components/watch-blogs/watch-blogs.component';
import { DownloadResourcesComponent } from './components/download-resources/download-resources.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AllMentorsComponent } from './components/all-mentors/all-mentors.component';
import { MyMentorsComponent } from './components/my-mentors/my-mentors.component';
import { MentorAboutComponent } from './components/mentor-about/mentor-about.component';
import {RatingModule} from "ngx-bootstrap/rating";
import {TabsModule} from "ngx-bootstrap/tabs";




@NgModule({
  declarations: [
    StudentAboutComponent,
    StudentComponent,
    WatchBlogsComponent,
    DownloadResourcesComponent,
    AllMentorsComponent,
    MyMentorsComponent,
    MentorAboutComponent,

  ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        FontAwesomeModule,
        CollapseModule,
        NgbCollapse,
        FormsModule,
        ReactiveFormsModule,
        RatingModule,
        TabsModule,
    ]
})
export class StudentModule { }
