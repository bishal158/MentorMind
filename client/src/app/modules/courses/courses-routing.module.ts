import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { ShowCoursesComponent } from './components/show-courses/show-courses.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [{ path: 'show-full-course', component: ShowCoursesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
