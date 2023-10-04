import { Component } from '@angular/core';
import {
  faArrowRight,
  faComments,
  faFilter,
  faSearch,
  faStopwatch,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-your-blogs',
  templateUrl: './all-your-blogs.component.html',
  styleUrls: ['./all-your-blogs.component.css'],
})
export class AllYourBlogsComponent {
  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faComments = faComments;
  protected readonly faTrash = faTrash;

  constructor(private toastr: ToastrService) {}

  showDelete() {
    this.toastr.warning('Deleted Successfully', 'Blogs', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }

  delete() {
    this.showDelete();
  }
}
