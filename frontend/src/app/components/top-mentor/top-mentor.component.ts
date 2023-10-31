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

  constructor(private topsMentorsService: TopMentorsService) {
    this.topsMentorsService.getTopMentors().subscribe((topMentors) => {
      this.topMentors = topMentors;
    });
  }
}
