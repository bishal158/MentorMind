import { Component } from '@angular/core';
import {
  faArrowRight,
  faCircleDown,
  faDownload, faFileArchive,
  faFilter,
  faSearch,
  faStopwatch
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-download-resources',
  templateUrl: './download-resources.component.html',
  styleUrls: ['./download-resources.component.css']
})
export class DownloadResourcesComponent {

    protected readonly faFilter = faFilter;
    protected readonly faSearch = faSearch;
  protected readonly faDownload = faDownload;
  protected readonly faCircleDown = faCircleDown;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faArrowRight = faArrowRight;

  source = 'assets/images/Blogs-card/blog3.jpg';
  filename:string = 'blog3.jpg';
  protected readonly faFileArchive = faFileArchive;
}
