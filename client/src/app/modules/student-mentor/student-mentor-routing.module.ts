import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMentorComponent } from './student-mentor.component';
import { StudentMentorAboutComponent } from './components/student-mentor-about/student-mentor-about.component';
import { StudentMentorAccountSettingsComponent } from './components/student-mentor-account-settings/student-mentor-account-settings.component';
import { AllYourBlogsComponent } from './components/all-your-blogs/all-your-blogs.component';
import { WriteBlogsComponent } from './components/write-blogs/write-blogs.component';
import { WatchOthersBlogsComponent } from './components/watch-others-blogs/watch-others-blogs.component';
import { ShareResourcesFormComponent } from './components/share-resources-form/share-resources-form.component';
import { ShowFullBlogComponent } from './components/show-full-blog/show-full-blog.component';
import { AllMenteesComponent } from './components/all-mentees/all-mentees.component';
import { AllYourCoursesComponent } from './components/all-your-courses/all-your-courses.component';
import { CreateNewCoursesComponent } from './components/create-new-courses/create-new-courses.component';
import { WatchOthersCoursesComponent } from './components/watch-others-courses/watch-others-courses.component';
import { DesignYourCourseComponent } from './components/design-your-course/design-your-course.component';
import { MenteesRequestsComponent } from './components/mentees-requests/mentees-requests.component';
const routes: Routes = [
  {
    path: 'student-mentor',
    component: StudentMentorComponent,
    children: [
      { path: 'student-mentor-about', component: StudentMentorAboutComponent },
      {
        path: 'student-mentor-account-settings',
        component: StudentMentorAccountSettingsComponent,
      },
      { path: 'all-your-blogs', component: AllYourBlogsComponent },
      { path: 'write-your-blogs', component: WriteBlogsComponent },
      { path: 'watch-others-blogs', component: WatchOthersBlogsComponent },
      { path: 'share-resources', component: ShareResourcesFormComponent },
      { path: 'show-full-blog', component: ShowFullBlogComponent },
      { path: 'all-mentees', component: AllMenteesComponent },
      { path: 'all-your-courses', component: AllYourCoursesComponent },
      { path: 'create-new-courses', component: CreateNewCoursesComponent },
      { path: 'watch-others-courses', component: WatchOthersCoursesComponent },
      { path: 'design-course', component: DesignYourCourseComponent },
      { path: 'mentees-requests', component: MenteesRequestsComponent },
    ],
  },
  // { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentMentorRoutingModule {}
