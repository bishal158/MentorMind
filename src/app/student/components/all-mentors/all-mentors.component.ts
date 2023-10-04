import { Component } from '@angular/core';
import {faArrowRight, faEye, faFilter, faSearch, faUserPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-all-mentors',
  templateUrl: './all-mentors.component.html',
  styleUrls: ['./all-mentors.component.css']
})
export class AllMentorsComponent {

  protected readonly faSearch = faSearch;
  protected readonly faFilter = faFilter;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faEye = faEye;
  protected readonly faUserPlus = faUserPlus;
}
