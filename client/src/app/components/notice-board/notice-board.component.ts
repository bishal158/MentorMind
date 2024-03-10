import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css'],
})
export class NoticeBoardComponent {
  noticeLists = [
    {
      noticeId: 1,
      noticeTitle: 'Green University Permanent Campus Rule and Regulations ',
      attachmentOption: 'yes',
      description:
        '"<p>The following section contains important regulations that govern the enrollment and academic progress of GUB students:</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Student Responsibility to Keep Informed</strong></p>\n' +
        '<p>This catalog, along with the Schedule of Classes and registration materials distributed each trimester, provides essential information. Students are responsible for keeping themselves informed of current policies, procedures, and changes printed in this catalog and in the official notices that are announced and posted time to time.</p>\n' +
        '<p>Students should also be aware that the curricular requirements are those in effect in the academic year of their admission. Students who withdraw for two or more trimesters are subject to the requirements in effect during the trimester that they return. Students who change their major are governed by the curricular requirements and regulations in effect during the academic year in which the change is made.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Admission Requirements</strong></p>\n' +
        '<p><em>Undergraduate Programs</em></p>\n',
    },
    {
      noticeId: 1,
      noticeTitle: '5th Convocation Program Notice and Requirements',
      attachmentOption: 'yes',
      description:
        '"<p>The following section contains important regulations that govern the enrollment and academic progress of GUB students:</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Student Responsibility to Keep Informed</strong></p>\n' +
        '<p>This catalog, along with the Schedule of Classes and registration materials distributed each trimester, provides essential information. Students are responsible for keeping themselves informed of current policies, procedures, and changes printed in this catalog and in the official notices that are announced and posted time to time.</p>\n' +
        '<p>Students should also be aware that the curricular requirements are those in effect in the academic year of their admission. Students who withdraw for two or more trimesters are subject to the requirements in effect during the trimester that they return. Students who change their major are governed by the curricular requirements and regulations in effect during the academic year in which the change is made.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Admission Requirements</strong></p>\n' +
        '<p><em>Undergraduate Programs</em></p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p>A candidate must fulfill any of the following requirements for admission to an undergraduate program at GUB:</p>\n' +
        '<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;S/he must have at least 2<sup>nd&nbsp;</sup>division or a minimum GPA of 2.5 or an equivalent grade separately in SSC and HSC or equivalent public examinations. However, if the candidate has a minimum GPA of 2.0 in either of these examinations, his/her cumulative GPA of the two examinations must be at least 6.0.</p>\n' +
        '<p>&middot;&nbsp; &nbsp;&nbsp;S/he must have passed at least 5 subjects in the O-Level and at least 2 subjects in the A-Level examinations. In these two examinations, the candidate must have a minimum GPA of 4.0 or grade &lsquo;B&rsquo; in 4 of the 7 subjects and a GPA of at least 3.5 or grade &lsquo;C&rsquo; in the rest.</p>\n' +
        '<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;A candidate for BA in Music, Fashion Design and Fine Arts, and Graphics must have a minimum GPA of 2.0 separately in SSC/O-Level and HSC/A-Level or equivalent public examinations.</p>\n' +
        '<p>&middot;&nbsp;&nbsp;&nbsp;A ward of freedom fighter (s) will be considered eligible for admission if s/he has a total GPA of 5.0 in SSC and HSC or equivalent public examinations.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><em>Graduate Programs</em></p>\n' +
        '<p>A candidate for the graduate program must have a minimum GPA of 2.00 in the bachelor&rsquo;s degree, provided s/he has the academic qualifications for undergraduate programs as mentioned above.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Admission of Foreign Students</strong></p>\n' +
        '<p>GUB encourages the admission of foreign students to different programs. If a student fulfills the general admission requirements for the specific program, s/he will write an application addressed to the Registrar along with the Official Academic Transcripts issued by the previous institutions. The&nbsp;<em>Equivalence Committee</em>&nbsp;of GUB will assess the papers of the student and make an evaluative recommendation. Based on the recommendation, the Dean of the Faculty will confirm the admission of the student. It is to mention that the Chair of the Department or the Dean of the Faculty concerned will determine the credit requirements for the student for the specific program.</p>\n' +
        '<p><strong>&nbsp;</strong></p>\n' +
        '<p><strong>Trimester of GUB</strong></p>\n' +
        '<p>The academic year of GUB is divided into 3 (three) trimesters of equal time interval and all programs operate on this trimester system. The Spring trimester spans from January to April, the Summer from May to August, and the Fall from September to December. In each trimester, the classes usually start in the second week of the beginning month and final exams in the third week of the last month of the trimester. The academic calendar provides the deadlines for advising, registration, add/drop of courses, exam dates, holidays, and other information.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Duration of the Program</strong></p>\n' +
        '<p>Normally a student in undergraduate program completes his/her program in 10-12 trimesters or in a time period of 4 (four) years. However, an undergraduate student must complete his/her program in a maximum period of&nbsp;<strong><em>8 (eight) years</em></strong>. A graduate student normally completes his/her program in 9 trimesters or in a period of 2 (two) years. However, a graduate student must complete his/her program in a maximum period of&nbsp;<strong><em>5 (five) years</em></strong>.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Academic Advising</strong></p>\n' +
        '<p>GUB endeavors to ensure that all students receive sound academic advice and guidance by the academic advisors or faculty members during their undergraduate or graduate studies. At the time of course registration in a trimester, each student must receive academic regarding the number of courses, or the courses in different categories for the purpose of registration. The advisor also determines the credit requirements for a student for the program s/he studies.</p>\n' +
        '<p><strong>&nbsp;</strong></p>\n' +
        '<p><strong>Waiver of Courses</strong></p>\n' +
        '<p>Students with excellent academic records and/or extensive professional experience may apply to the Dean of the Faculty or Advisor of the program along with the latest academic transcripts issued by the previous institutions for course waiver. A student who has completed the same or advanced course and got the letter grade of &lsquo;B&rsquo; or higher from the institution which follows the grading policy of UGC of Bangladesh may get the course waiver from the current program. However, the letter grade &lsquo;C&rsquo; can also be considered for course waiver if the highest letter grade &lsquo;A&rsquo; or &lsquo;A+&rsquo; of the institution is based on 90% or more marks. Under all circumstances, GUB authority reserves the right to accept or refuse the student&rsquo;s appeal for course waiver.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Credit Transfer</strong></p>\n' +
        '<p>The student, native or foreign, willing to transfer his/her credits from other accredited institutions to GUB must fulfill the general admission requirements for the specific program. The student must write an application for credit transfer to the Registrar of GUB along with the Official Academic Transcripts issued by the previous institutions and NOC (no objection certificate). Under no circumstances, can a student transfer more than 50% credits from other institutions to GUB.</p>\n' +
        '<p>The student willing to transfer his/her credits from GUB to other institutions in Bangladesh or abroad must write an application to the Registrar of GUB along with the papers issued by the institution s/he is willing to study. The student may again come back and study at GUB. S/he can also attend classes in a trimester but s/he has to register for courses as special or non-degree student.</p>\n' +
        '<p><strong>&nbsp;</strong></p>\n' +
        '<p><strong>Selecting the Major</strong></p>\n' +
        '<p>The credit requirement for any specific program at undergraduate and graduate levels is set by the department concerned. A student is advised to choose his/her major usually after completing all core and/or GED, and/or capstone courses at both undergraduate and graduate programs.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Selecting Minor</strong></p>\n' +
        '<p>In the Faculty of Business Studies, a minor consists of&nbsp;<strong><em>9 credits&nbsp;</em></strong>of course work in undergraduate programs. Some more specific requirements may be assigned by the department. Students must consult the department for full details.</p>"',
    },
    {
      noticeId: 1,
      noticeTitle: 'Final Exam Details',
      attachmentOption: 'no',
      description:
        '"<p>The following section contains important regulations that govern the enrollment and academic progress of GUB students:</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Student Responsibility to Keep Informed</strong></p>\n' +
        '<p>This catalog, along with the Schedule of Classes and registration materials distributed each trimester, provides essential information. Students are responsible for keeping themselves informed of current policies, procedures, and changes printed in this catalog and in the official notices that are announced and posted time to time.</p>\n' +
        '<p>Students should also be aware that the curricular requirements are those in effect in the academic year of their admission. Students who withdraw for two or more trimesters are subject to the requirements in effect during the trimester that they return. Students who change their major are governed by the curricular requirements and regulations in effect during the academic year in which the change is made.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Admission Requirements</strong></p>\n' +
        '<p><em>Undergraduate Programs</em></p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p>A candidate must fulfill any of the following requirements for admission to an undergraduate program at GUB:</p>\n' +
        '<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;S/he must have at least 2<sup>nd&nbsp;</sup>division or a minimum GPA of 2.5 or an equivalent grade separately in SSC and HSC or equivalent public examinations. However, if the candidate has a minimum GPA of 2.0 in either of these examinations, his/her cumulative GPA of the two examinations must be at least 6.0.</p>\n' +
        '<p>&middot;&nbsp; &nbsp;&nbsp;S/he must have passed at least 5 subjects in the O-Level and at least 2 subjects in the A-Level examinations. In these two examinations, the candidate must have a minimum GPA of 4.0 or grade &lsquo;B&rsquo; in 4 of the 7 subjects and a GPA of at least 3.5 or grade &lsquo;C&rsquo; in the rest.</p>\n' +
        '<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;A candidate for BA in Music, Fashion Design and Fine Arts, and Graphics must have a minimum GPA of 2.0 separately in SSC/O-Level and HSC/A-Level or equivalent public examinations.</p>\n' +
        '<p>&middot;&nbsp;&nbsp;&nbsp;A ward of freedom fighter (s) will be considered eligible for admission if s/he has a total GPA of 5.0 in SSC and HSC or equivalent public examinations.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><em>Graduate Programs</em></p>\n' +
        '<p>A candidate for the graduate program must have a minimum GPA of 2.00 in the bachelor&rsquo;s degree, provided s/he has the academic qualifications for undergraduate programs as mentioned above.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Admission of Foreign Students</strong></p>\n' +
        '<p>GUB encourages the admission of foreign students to different programs. If a student fulfills the general admission requirements for the specific program, s/he will write an application addressed to the Registrar along with the Official Academic Transcripts issued by the previous institutions. The&nbsp;<em>Equivalence Committee</em>&nbsp;of GUB will assess the papers of the student and make an evaluative recommendation. Based on the recommendation, the Dean of the Faculty will confirm the admission of the student. It is to mention that the Chair of the Department or the Dean of the Faculty concerned will determine the credit requirements for the student for the specific program.</p>\n' +
        '<p><strong>&nbsp;</strong></p>\n' +
        '<p><strong>Trimester of GUB</strong></p>\n' +
        '<p>The academic year of GUB is divided into 3 (three) trimesters of equal time interval and all programs operate on this trimester system. The Spring trimester spans from January to April, the Summer from May to August, and the Fall from September to December. In each trimester, the classes usually start in the second week of the beginning month and final exams in the third week of the last month of the trimester. The academic calendar provides the deadlines for advising, registration, add/drop of courses, exam dates, holidays, and other information.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Duration of the Program</strong></p>\n' +
        '<p>Normally a student in undergraduate program completes his/her program in 10-12 trimesters or in a time period of 4 (four) years. However, an undergraduate student must complete his/her program in a maximum period of&nbsp;<strong><em>8 (eight) years</em></strong>. A graduate student normally completes his/her program in 9 trimesters or in a period of 2 (two) years. However, a graduate student must complete his/her program in a maximum period of&nbsp;<strong><em>5 (five) years</em></strong>.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Academic Advising</strong></p>\n' +
        '<p>GUB endeavors to ensure that all students receive sound academic advice and guidance by the academic advisors or faculty members during their undergraduate or graduate studies. At the time of course registration in a trimester, each student must receive academic regarding the number of courses, or the courses in different categories for the purpose of registration. The advisor also determines the credit requirements for a student for the program s/he studies.</p>\n' +
        '<p><strong>&nbsp;</strong></p>\n' +
        '<p><strong>Waiver of Courses</strong></p>\n' +
        '<p>Students with excellent academic records and/or extensive professional experience may apply to the Dean of the Faculty or Advisor of the program along with the latest academic transcripts issued by the previous institutions for course waiver. A student who has completed the same or advanced course and got the letter grade of &lsquo;B&rsquo; or higher from the institution which follows the grading policy of UGC of Bangladesh may get the course waiver from the current program. However, the letter grade &lsquo;C&rsquo; can also be considered for course waiver if the highest letter grade &lsquo;A&rsquo; or &lsquo;A+&rsquo; of the institution is based on 90% or more marks. Under all circumstances, GUB authority reserves the right to accept or refuse the student&rsquo;s appeal for course waiver.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Credit Transfer</strong></p>\n' +
        '<p>The student, native or foreign, willing to transfer his/her credits from other accredited institutions to GUB must fulfill the general admission requirements for the specific program. The student must write an application for credit transfer to the Registrar of GUB along with the Official Academic Transcripts issued by the previous institutions and NOC (no objection certificate). Under no circumstances, can a student transfer more than 50% credits from other institutions to GUB.</p>\n' +
        '<p>The student willing to transfer his/her credits from GUB to other institutions in Bangladesh or abroad must write an application to the Registrar of GUB along with the papers issued by the institution s/he is willing to study. The student may again come back and study at GUB. S/he can also attend classes in a trimester but s/he has to register for courses as special or non-degree student.</p>\n' +
        '<p><strong>&nbsp;</strong></p>\n' +
        '<p><strong>Selecting the Major</strong></p>\n' +
        '<p>The credit requirement for any specific program at undergraduate and graduate levels is set by the department concerned. A student is advised to choose his/her major usually after completing all core and/or GED, and/or capstone courses at both undergraduate and graduate programs.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Selecting Minor</strong></p>\n' +
        '<p>In the Faculty of Business Studies, a minor consists of&nbsp;<strong><em>9 credits&nbsp;</em></strong>of course work in undergraduate programs. Some more specific requirements may be assigned by the department. Students must consult the department for full details.</p>"',
    },
  ];
  attachment_error_message: string | undefined;
  attachment_error_alert_msg: boolean | undefined;
  constructor(
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
  ) {}
  getControl(name: any): AbstractControl | null {
    return this.attachmentForm.get(name);
  }
  attachmentForm: FormGroup = this.formbuilder.group({
    attachment: ['', [Validators.required]],
  });
  ngOnInit(): void {
    //text_editor
    const attachment_error_control = this.attachmentForm.get('attachment');
    attachment_error_control?.valueChanges.subscribe((attachment) => {
      this.validate_attachment(attachment_error_control as FormControl);
    });
  }
  validate_attachment(attachment_error_control: FormControl): void {
    this.attachment_error_message = ' ';
    this.attachment_error_alert_msg = false;
    if (
      attachment_error_control.invalid &&
      (attachment_error_control.touched || attachment_error_control.dirty)
    ) {
      this.attachment_error_alert_msg = true;
      if (attachment_error_control.errors?.['required']) {
        this.attachment_error_message = 'Attachment is required';
      }
    }
  }
  submit(attachment: any) {
    this.attachmentForm.reset();
    this.toastr.success('Successfully Sent', 'Attachment');
    console.log(attachment);
  }
  protected readonly faFile = faFile;
}
