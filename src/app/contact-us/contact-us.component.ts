import { Component } from '@angular/core';
import {faPhone,faLocationDot,faEnvelope,faClock} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  faPhone = faPhone;
  faLocatioinDot = faLocationDot;
  faEnvelope = faEnvelope;
  faClock = faClock;
}
