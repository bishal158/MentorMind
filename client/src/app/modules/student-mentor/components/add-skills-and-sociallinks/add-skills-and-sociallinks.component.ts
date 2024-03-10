import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faBrain, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-add-skills-and-sociallinks',
  templateUrl: './add-skills-and-sociallinks.component.html',
  styleUrls: ['./add-skills-and-sociallinks.component.css'],
})
export class AddSkillsAndSociallinksComponent {
  protected readonly faFacebook = faFacebook;
  protected readonly faTwitter = faTwitter;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faGithub = faGithub;
  protected readonly faBrain = faBrain;
  social_link_error_message: string | undefined;
  social_name_error_message: string | undefined;
  skills_error_message: string | undefined;
  //constructor for form builder
  constructor(private formbuilder: FormBuilder) {}
  //Form builder
  social_link_form: FormGroup = this.formbuilder.group({
    social_name: ['', [Validators.required]],
    social_link: ['', [Validators.required]],
  });
  skills_form: FormGroup = this.formbuilder.group({
    skills: ['', [Validators.required]],
  });
  //getcontrol function for input validation
  getControl(name: any): AbstractControl | null {
    return this.social_link_form.get(name);
  }
  get_skills_formControl(name: any): AbstractControl | null {
    return this.skills_form.get(name);
  }
  //oninit function
  ngOnInit(): void {
    const social_link_error_control = this.social_link_form.get('social_link');
    social_link_error_control?.valueChanges.subscribe((social_link) => {
      this.validate_social_link(social_link_error_control as FormControl);
    });
    const social_name_error_control = this.social_link_form.get('social_name');
    social_name_error_control?.valueChanges.subscribe((social_name) => {
      this.validate_social_name(social_name_error_control as FormControl);
    });
    const skills_error_control = this.skills_form.get('skills');
    skills_error_control?.valueChanges.subscribe((skills) => {
      this.validate_skills(skills_error_control as FormControl);
    });
  }

  //social_name
  social_name_error_alert_msg: boolean | undefined;
  validate_social_name(social_name_error_control: FormControl): void {
    this.social_name_error_message = ' ';
    this.social_name_error_alert_msg = false;
    if (
      social_name_error_control.invalid &&
      (social_name_error_control.touched || social_name_error_control.dirty)
    ) {
      this.social_name_error_alert_msg = true;
      if (social_name_error_control.errors?.['required']) {
        this.social_name_error_message = 'Publication_link is required';
      }
    }
  }

  //social_link
  social_link_error_alert_msg: boolean | undefined;
  validate_social_link(social_link_error_control: FormControl): void {
    this.social_link_error_message = ' ';
    this.social_link_error_alert_msg = false;
    if (
      social_link_error_control.invalid &&
      (social_link_error_control.touched || social_link_error_control.dirty)
    ) {
      this.social_link_error_alert_msg = true;
      if (social_link_error_control.errors?.['required']) {
        this.social_link_error_message = 'Publication_link is required';
      }
    }
  }

  //skills
  skills_error_alert_msg: boolean | undefined;
  validate_skills(skills_error_control: FormControl): void {
    this.skills_error_message = ' ';
    this.skills_error_alert_msg = false;
    if (
      skills_error_control.invalid &&
      (skills_error_control.touched || skills_error_control.dirty)
    ) {
      this.skills_error_alert_msg = true;
      // if(facebook_link_error_control.errors?.['required']){
      //   this.facebook_link_error_message= 'Publication_link is required';
      // }
      if (skills_error_control.errors?.['pattern']) {
        this.skills_error_message = 'Give a valid skills pattern';
      }
    }
  }
  add_links() {
    console.log(this.social_link_form.value, this.social_link_form.invalid);
    this.social_link_form.reset();
  }
  add_skills() {
    console.log(this.skills_form.value, this.skills_form.invalid);
    this.skills_form.reset();
  }

  protected readonly faLink = faLink;
  protected readonly faGlobe = faGlobe;
}
