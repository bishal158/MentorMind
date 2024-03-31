import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { StudentMentorInfoComponent } from './components/student-mentor-info/student-mentor-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login/admin', component: AdminLoginComponent },
  { path: 'register/admin', component: AdminRegisterComponent },
  { path: 'forget-password', component: ForgotPasswordComponent },
  { path: 'notices', component: NoticeBoardComponent },
  {
    path: 'student-mentor-info',
    component: StudentMentorInfoComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
