import { Component, TemplateRef } from '@angular/core';
import {
  faEye,
  faGraduationCap,
  faSearch,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-all-mentees',
  templateUrl: './all-mentees.component.html',
  styleUrls: ['./all-mentees.component.css'],
})
export class AllMenteesComponent {
  protected readonly faEye = faEye;
  protected readonly faTrash = faTrash;
  protected readonly faGraduationCap = faGraduationCap;
  protected readonly faUser = faUser;
  protected readonly faSearch = faSearch;
  constructor(
    private toastr: ToastrService,
    private modalService: BsModalService,
  ) {}
  searchText: string = '';
  mentees = [
    {
      name: 'Mafuj Ahmed Bishal',
      email: 'bishal158@gmail.com',
      imageUrl: './assets/images/top-mentors/mentor.jpg',
      studentId: '201002158',
      phone: '01798541625',
    },
    {
      name: 'Mafuj Ahmed Bishal',
      email: 'bishal158@gmail.com',
      imageUrl: './assets/images/top-mentors/mentor.jpg',
      studentId: '201002158',
      phone: '01798541625',
    },
    {
      name: 'Mafuj Ahmed Bishal',
      email: 'bishal158@gmail.com',
      imageUrl: './assets/images/top-mentors/mentor.jpg',
      studentId: '201002158',
      phone: '01798541625',
    },
    {
      name: 'Mafuj Ahmed Bishal',
      email: 'bishal158@gmail.com',
      imageUrl: './assets/images/top-mentors/mentor.jpg',
      studentId: '201002158',
      phone: '01798541625',
    },
    {
      name: 'Mafuj Ahmed Bishal',
      email: 'bishal158@gmail.com',
      imageUrl: './assets/images/top-mentors/mentor.jpg',
      studentId: '201002158',
      phone: '01798541625',
    },
    {
      name: 'Mafuj Ahmed Bishal',
      email: 'bishal158@gmail.com',
      imageUrl: './assets/images/top-mentors/mentor.jpg',
      studentId: '201002158',
      phone: '01798541625',
    },
    {
      name: 'Mafuj Ahmed Bishal',
      email: 'bishal158@gmail.com',
      imageUrl: './assets/images/top-mentors/mentor.jpg',
      studentId: '201002158',
      phone: '01798541625',
    },
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
  total_mentees: any = this.mentees.length;
  total_mentees_counter: any = 0;
  total_mentees_counter_stop = setInterval(() => {
    this.total_mentees_counter++;
    if (this.total_mentees_counter === this.total_mentees) {
      clearInterval(this.total_mentees_counter_stop);
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
    this.toastr.warning('Mentee has been removed');
    this.modalRef?.hide();
  }
}
