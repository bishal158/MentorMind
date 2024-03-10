import { Component, TemplateRef } from '@angular/core';
import {
  faChalkboardTeacher,
  faEye,
  faSearch,
  faTrash,
  faUserCheck,
  faUserXmark,
} from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mentor-requests',
  templateUrl: './mentor-requests.component.html',
  styleUrls: ['./mentor-requests.component.css'],
})
export class MentorRequestsComponent {
  protected readonly faUserCheck = faUserCheck;
  protected readonly faUserXmark = faUserXmark;
  protected readonly faChalkboardTeacher = faChalkboardTeacher;
  protected readonly faEye = faEye;
  protected readonly faTrash = faTrash;
  protected readonly faSearch = faSearch;
  constructor(
    private toastr: ToastrService,
    private modalService: BsModalService,
  ) {}
  searchText: any;
  mentors_requests = [
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
  total_mentors_requests: any = this.mentors_requests.length;
  total_mentors_requests_counter: any = 0;
  total_mentors_requests_counter_stop = setInterval(() => {
    this.total_mentors_requests_counter++;
    if (this.total_mentors_requests_counter === this.total_mentors_requests) {
      clearInterval(this.total_mentors_requests_counter_stop);
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

  accept_request() {
    this.toastr.success('Mentor request has been accepted');
  }
  reject_request() {
    this.toastr.error('Mentor request has been rejected');
  }
}
