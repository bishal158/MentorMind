import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMentorComponent } from './student-mentor.component';
import { StudentMentorAboutComponent } from './components/student-mentor-about/student-mentor-about.component';
import {
  StudentMentorAccountSettingsComponent
} from "./components/student-mentor-account-settings/student-mentor-account-settings.component";
import {HomeComponent} from "../home/home.component";
import {AllYourBlogsComponent} from "./components/all-your-blogs/all-your-blogs.component";
import {WriteBlogsComponent} from "./components/write-blogs/write-blogs.component";
import {WatchOthersBlogsComponent} from "./components/watch-others-blogs/watch-others-blogs.component";
import {ShareResourcesFormComponent} from "./components/share-resources-form/share-resources-form.component";
import {ShowFullBlogComponent} from "./components/show-full-blog/show-full-blog.component";
const routes: Routes = [
  {
    path: 'student-mentor',component:StudentMentorComponent,children:[
      { path:'student-mentor-about',component:StudentMentorAboutComponent},
      { path:'student-mentor-account-settings', component:StudentMentorAccountSettingsComponent},
      { path:'all-your-blogs',component:AllYourBlogsComponent},
      { path:'write-your-blogs',component:WriteBlogsComponent},
      { path:'watch-others-blogs',component:WatchOthersBlogsComponent},
      { path:'share-resources',component:ShareResourcesFormComponent},
      { path:'show-full-blog',component:ShowFullBlogComponent},
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class StudentMentorRoutingModule { }
