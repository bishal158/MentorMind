import { Component } from '@angular/core';
import {faFilter, faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-my-mentors',
  templateUrl: './my-mentors.component.html',
  styleUrls: ['./my-mentors.component.css']
})
export class MyMentorsComponent {

  protected readonly faFilter = faFilter;
  protected readonly faSearch = faSearch;
}
