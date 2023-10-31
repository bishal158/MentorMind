import { Component, TemplateRef } from '@angular/core';
import {
  faArrowRight,
  faComments,
  faFilter,
  faSearch,
  faStopwatch,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BlogsService } from '../../../../services/student-mentor-services/blogs.service';

@Component({
  selector: 'app-all-your-blogs',
  templateUrl: './all-your-blogs.component.html',
  styleUrls: ['./all-your-blogs.component.css'],
})
export class AllYourBlogsComponent {
  // Delete Blog Modal
  modalRef?: BsModalRef;
  modal_config = {
    animated: true,
  };
  blogs: any = [];
  // font awesome icons
  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faComments = faComments;
  protected readonly faTrash = faTrash;

  // Constructor
  constructor(
    private toastr: ToastrService,
    private modalService: BsModalService,
    private blogService: BlogsService,
  ) {
    this.blogService.get_your_blogs().subscribe((blog) => {
      this.blogs = blog;
    });
  }

  deleteBlog(blog_id: any) {
    this.blogService.delete_blogs(blog_id).subscribe((blog) => {
      this.blogs = this.blogs.filter((blog: any) => blog.id != blog_id);
      this.modalRef?.hide();
      this.showDelete();
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modal_config);
  }

  // confirm(): void {
  //   this.modalRef?.hide();
  // }

  decline(): void {
    this.modalRef?.hide();
  }

  // Delete Modal Toaster
  showDelete() {
    this.toastr.error('Deleted Successfully', 'Blog!!', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }
}
