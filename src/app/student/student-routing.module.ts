import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentAboutComponent } from './components/student-about/student-about.component';
import {WatchBlogsComponent} from "./components/watch-blogs/watch-blogs.component";
import {DownloadResourcesComponent} from "./components/download-resources/download-resources.component";
import {AllMentorsComponent} from "./components/all-mentors/all-mentors.component";

const routes: Routes = [
  {
    path: 'student',component: StudentComponent,children: [
      { path: 'student-about', component: StudentAboutComponent },
      { path: 'all-mentors', component: AllMentorsComponent},
      { path: 'blogs', component:WatchBlogsComponent},
      { path: 'download-resources', component:DownloadResourcesComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
