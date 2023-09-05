import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMentorComponent } from './student-mentor.component';
import { StudentMentorAboutComponent } from './components/student-mentor-about/student-mentor-about.component';
import {
  StudentMentorAccountSettingsComponent
} from "./components/student-mentor-account-settings/student-mentor-account-settings.component";
const routes: Routes = [
  {
    path: 'student-mentor',component:StudentMentorComponent,children:[
      { path:'student-mentor-about',component:StudentMentorAboutComponent},
      { path:'student-mentor-account-settings', component:StudentMentorAccountSettingsComponent}
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
