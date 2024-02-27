import { Component, TemplateRef } from '@angular/core';
import {
  faChalkboardTeacher,
  faEye,
  faGraduationCap,
  faSearch,
  faTrash,
  faUserCheck,
  faUserXmark,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-all-mentors',
  templateUrl: './all-mentors.component.html',
  styleUrls: ['./all-mentors.component.css'],
})
export class AllMentorsComponent {
  protected readonly faGraduationCap = faGraduationCap;
  protected readonly faTrash = faTrash;
  protected readonly faEye = faEye;
  protected readonly faChalkboardTeacher = faChalkboardTeacher;
  protected readonly faSearch = faSearch;
  constructor(
    private toastr: ToastrService,
    private modalService: BsModalService,
  ) {}
  searchText: string = '';
  mentors = [
    {
      name: 'Mafuj Ahmed Bishal',
      email: 'bishal158@gmail.com',
      imageUrl: './assets/images/top-mentors/mentor.jpg',
      studentId: '201002158',
      phone: '01798541625',
    },
    {
      name: 'Tasdid Alam',
      email: 'tasdid157@gmail.com',
      imageUrl: './assets/images/top-mentors/mentor.jpg',
      studentId: '201002157',
      phone: '01798541625',
    },
    {
      name: 'Mehedi Hasan Shawon',
      email: 'shawon255@gmail.com',
      imageUrl: './assets/images/top-mentors/mentor.jpg',
      studentId: '201002255',
      phone: '01798541625',
    },
  ];
  total_mentors: any = this.mentors.length;
  total_mentors_counter: any = 0;
  total_mentors_counter_stop = setInterval(() => {
    this.total_mentors_counter++;
    if (this.total_mentors_counter === this.total_mentors) {
      clearInterval(this.total_mentors_counter_stop);
    }
  }, 5);

  modalRef?: BsModalRef;
  modal_config = {
    animated: true,
  };
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modal_config);
  }

  cancel_delete(): void {
    this.modalRef?.hide();
  }
  delete_user() {
    this.toastr.warning('Mentor has been removed');
    this.modalRef?.hide();
  }
}
