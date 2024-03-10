import { Component, OnInit } from '@angular/core';
import {
  faArrowRight,
  faComments,
  faFilter,
  faSearch,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-watch-blogs',
  templateUrl: './watch-blogs.component.html',
  styleUrls: ['./watch-blogs.component.css'],
})
export class WatchBlogsComponent implements OnInit {
  protected readonly faArrowRight = faArrowRight;
  protected readonly faSearch = faSearch;
  protected readonly faFilter = faFilter;
  protected readonly faStopwatch = faStopwatch;
  protected readonly faComments = faComments;
  searchText: any;
  blogs = [
    {
      title: 'Website Development and Design',
      author: 'Mafuj Ahmed Bishal',
      description:
        'This is a wider card with supporting\n' +
        '          text below as a natural lead-in to additional content. This content is\n' +
        '          a little bit longerThis is a wider card with supporting text below as\n' +
        '          a natural lead-in to additional content. This content is a little bit\n' +
        '          longerThis is a wider card with supporting text below as a natural\n' +
        '          lead-in to additional content. This content is a little bit longer.\n' +
        '          This is a wider card with supporting text below as a natural lead-in\n' +
        '          to additional content. This content is a little bit longer.This is a\n' +
        '          wider card with supporting text below as a natural lead-in to\n' +
        '          additional content.',
      updated_at: '12 december,2023',
      total_comment: 222222,
      cover_image: 'assets/images/Blogs-card/blog2.gif',
    },
    {
      title: 'Website Development and Design',
      author: 'Mafuj Ahmed Bishal',
      description:
        'This is a wider card with supporting\n' +
        '          text below as a natural lead-in to additional content. This content is\n' +
        '          a little bit longerThis is a wider card with supporting text below as\n' +
        '          a natural lead-in to additional content. This content is a little bit\n' +
        '          longerThis is a wider card with supporting text below as a natural\n' +
        '          lead-in to additional content. This content is a little bit longer.\n' +
        '          This is a wider card with supporting text below as a natural lead-in\n' +
        '          to additional content. This content is a little bit longer.This is a\n' +
        '          wider card with supporting text below as a natural lead-in to\n' +
        '          additional content.',
      updated_at: '12 december,2023',
      total_comment: 222222,
      cover_image: 'assets/images/Blogs-card/blog2.gif',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
