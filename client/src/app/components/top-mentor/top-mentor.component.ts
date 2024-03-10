import { Component } from '@angular/core';
import { TopMentorsService } from '../../services/top-mentors.service';

@Component({
  selector: 'app-top-mentor',
  templateUrl: './top-mentor.component.html',
  styleUrls: ['./top-mentor.component.css'],
})
export class TopMentorComponent {
  //Rating
  max = 10;
  rate = 7;
  isReadonly = true;
  topMentors: any = [];
  mentors = [
    {
      id: 1,
      name: 'Mafuj Ahmed Bishal',
      imageUrl: 'assets/images/top-mentors/mentor1.jpg',
      rate: 10,
      subject: 'Database Management System',
    },
    {
      id: 2,
      name: 'Mehedi Hasan Shawon',
      imageUrl: 'assets/images/top-mentors/mentor2.jpg',
      rate: 3,
      subject: 'Database Management System',
    },
    {
      id: 3,
      name: 'Mafuj Ahmed Bishal',
      imageUrl: 'assets/images/top-mentors/mentor1.jpg',
      rate: 10,
      subject: 'Database Management System',
    },
    {
      id: 1,
      name: 'Mafuj Ahmed Bishal',
      imageUrl: 'assets/images/top-mentors/mentor1.jpg',
      rate: 10,
      subject: 'Database Management System',
    },
    {
      id: 1,
      name: 'Mafuj Ahmed Bishal',
      imageUrl: 'assets/images/top-mentors/mentor1.jpg',
      rate: 10,
      subject: 'Database Management System',
    },

    {
      id: 1,
      name: 'Mafuj Ahmed Bishal',
      imageUrl: 'assets/images/top-mentors/mentor1.jpg',
      rate: 10,
      subject: 'Database Management System',
    },
    {
      id: 1,
      name: 'Mafuj Ahmed Bishal',
      imageUrl: 'assets/images/top-mentors/mentor1.jpg',
      rate: 10,
      subject: 'Database Management System',
    },
  ];
  constructor(private topsMentorsService: TopMentorsService) {
    this.topsMentorsService.getTopMentors().subscribe((topMentors) => {
      this.topMentors = topMentors;
    });
  }
}
