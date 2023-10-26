import { Component } from '@angular/core';
import {
  faEnvelope,
  faIdBadge,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';
import { GetAllMenteesService } from '../../../../services/student-mentor-services/get-all-mentees.service';

@Component({
  selector: 'app-all-mentees',
  templateUrl: './all-mentees.component.html',
  styleUrls: ['./all-mentees.component.css'],
})
export class AllMenteesComponent {
  mentees: any;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faMobile = faMobile;
  protected readonly faIdBadge = faIdBadge;

  constructor(private get_all_mentees: GetAllMenteesService) {
    this.get_all_mentees.all_mentees().subscribe((mentees) => {
      this.mentees = mentees;
    });
  }
}
