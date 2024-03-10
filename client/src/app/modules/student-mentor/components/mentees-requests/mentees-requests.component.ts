import { Component, TemplateRef } from '@angular/core';
import {
  faChalkboardTeacher,
  faSearch,
  faUserCheck,
  faUserXmark,
} from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mentees-requests',
  templateUrl: './mentees-requests.component.html',
  styleUrls: ['./mentees-requests.component.css'],
})
export class MenteesRequestsComponent {
  protected readonly faUserCheck = faUserCheck;
  protected readonly faUserXmark = faUserXmark;
  constructor(
    private toastr: ToastrService,
    private modalService: BsModalService,
  ) {}
  searchText: any;
  mentees_requests = [
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
  total_mentors_requests: any = this.mentees_requests.length;
  total_mentees_requests_counter: any = 0;
  total_mentors_requests_counter_stop = setInterval(() => {
    this.total_mentees_requests_counter++;
    if (this.total_mentees_requests_counter === this.total_mentors_requests) {
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
    this.toastr.success('Mentees request has been accepted');
  }
  reject_request() {
    this.toastr.error('Mentees request has been rejected');
  }

  protected readonly faSearch = faSearch;
  protected readonly faChalkboardTeacher = faChalkboardTeacher;
}
