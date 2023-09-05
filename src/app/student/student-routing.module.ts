import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentAboutComponent } from './components/student-about/student-about.component';

const routes: Routes = [
  {
    path: 'student',component: StudentComponent,children: [
      { path: 'student-about', component: StudentAboutComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
