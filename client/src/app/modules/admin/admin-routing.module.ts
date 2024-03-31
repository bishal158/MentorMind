import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MentorRequestsComponent } from './components/mentor-requests/mentor-requests.component';
import { AllMentorsComponent } from './components/all-mentors/all-mentors.component';
import { AllMenteesComponent } from './components/all-mentees/all-mentees.component';
import { PostNoticeComponent } from './components/post-notice/post-notice.component';
import { AllCvResumeComponent } from './components/all-cv-resume/all-cv-resume.component';
import { MentorAboutComponent } from './components/mentor-about/mentor-about.component';
import { authGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authGuard],
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'mentor-requests', component: MentorRequestsComponent },
      { path: 'all-mentors', component: AllMentorsComponent },
      { path: 'all-mentees', component: AllMenteesComponent },
      { path: 'post-notice', component: PostNoticeComponent },
      { path: 'all-cv-resume', component: AllCvResumeComponent },
      { path: 'mentor-about', component: MentorAboutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
