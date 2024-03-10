// Swiper js Library
import { register } from 'swiper/element/bundle';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrequentAskQuestionComponent } from './components/frequent-ask-question/frequent-ask-question.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CounterComponent } from './components/counter/counter.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TopMentorComponent } from './components/top-mentor/top-mentor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BannerComponent } from './components/banner/banner.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RatingModule } from 'ngx-bootstrap/rating';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { StudentModule } from './modules/student/student.module';
import { StudentMentorInfoComponent } from './components/student-mentor-info/student-mentor-info.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LogoComponent } from './components/logo/logo.component';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { StudentMentorModule } from './modules/student-mentor/student-mentor.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminModule } from './modules/admin/admin.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

//swiper js library
register();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FrequentAskQuestionComponent,
    CounterComponent,
    ContactUsComponent,
    TopMentorComponent,
    BannerComponent,
    ForgotPasswordComponent,
    StudentMentorInfoComponent,
    LogoComponent,
    PageNotFoundComponent,
    NoticeBoardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    StudentMentorModule,
    StudentModule,
    AdminModule,
    EditorModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    NgbTooltipModule,
    TooltipModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [],
})
export class AppModule {}
