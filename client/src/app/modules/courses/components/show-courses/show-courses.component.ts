import { Component } from '@angular/core';
import {
  faBarsStaggered,
  faBook,
  faBookOpenReader,
  faChalkboardUser,
  faDownload,
  faEye,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.css'],
})
export class ShowCoursesComponent {
  protected readonly faBarsStaggered = faBarsStaggered;
  isCollapsed = false;
  open_inner_item = true;
  protected readonly faSignOut = faSignOut;
  protected readonly faDownload = faDownload;
  protected readonly faBookOpenReader = faBookOpenReader;
  protected readonly faChalkboardUser = faChalkboardUser;
  protected readonly faUser = faUser;
  protected readonly faEye = faEye;
  protected readonly faBook = faBook;

  content =
    '<p><em>Data Mining Tutorial</em>&nbsp;covers basic and advanced topics, this is designed for beginner and experienced working professionals too. This&nbsp;<em>Data Mining Tutorial</em>&nbsp;help you to gain the fundamental of Data Mining for exploring a wide range of techniques.</p>\n' +
    '<div class="wp-caption alignnone"><img src="https://media.geeksforgeeks.org/wp-content/uploads/20230414170254/Data-Mining-Tutorial.webp" alt="Data Mining Tutorial" width="1000">\n' +
    '<p class="wp-caption-text">Data Mining</p>\n' +
    '</div>\n' +
    '<h2>What is Data Mining?</h2>\n' +
    '<p>Data mining is the process of extracting knowledge or insights from large amounts of data using various statistical and computational techniques. The data can be structured, semi-structured or unstructured, and can be stored in various forms such as databases, data warehouses, and data lakes.</p>\n' +
    '<div id="GFG_AD_gfg_mobile_336x280"></div>\n' +
    '<p>The primary goal of data mining is to discover hidden patterns and relationships in the data that can be used to make informed decisions or predictions. This involves exploring the data using various techniques such as clustering, classification, regression analysis, association rule mining, and anomaly detection.</p>\n' +
    '<p>Data mining has a wide range of applications across various industries, including marketing, finance, healthcare, and telecommunications. For example, in marketing, data mining can be used to identify customer segments and target marketing campaigns, while in healthcare, it can be used to identify risk factors for diseases and develop personalized treatment plans.</p>';
}
