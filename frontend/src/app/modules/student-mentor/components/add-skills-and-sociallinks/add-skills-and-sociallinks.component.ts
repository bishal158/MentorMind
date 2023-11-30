import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
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
  facebook_link_error_message: string | undefined;
  twitter_link_error_message: string | undefined;
  linkedin_link_error_message: string | undefined;
  github_link_error_message: string | undefined;
  skills_error_message: string | undefined;
  //constructor for form builder
  constructor(private formbuilder: FormBuilder) {}
  facebook_link_regex =
    /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-.]*\/)*([\w\-.]*)/gi;
  twitter_link_regex =
    /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/g;
  linkedin_link_regex =
    /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm;
  github_link_regex =
    /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]{1,25}$/gim;
  //Form builder
  social_link_form: FormGroup = this.formbuilder.group({
    facebook_link: [
      '',
      [Validators.pattern(this.facebook_link_regex), Validators.required],
    ],
    twitter_link: [
      '',
      [Validators.pattern(this.twitter_link_regex), Validators.required],
    ],
    linkedin_link: [
      '',
      [Validators.pattern(this.linkedin_link_regex), Validators.required],
    ],
    github_link: [
      '',
      [Validators.pattern(this.github_link_regex), Validators.required],
    ],
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
    const facebook_link_error_control =
      this.social_link_form.get('facebook_link');
    facebook_link_error_control?.valueChanges.subscribe((facebook_link) => {
      this.validate_facebook_link(facebook_link_error_control as FormControl);
    });
    const twitter_link_error_control =
      this.social_link_form.get('twitter_link');
    twitter_link_error_control?.valueChanges.subscribe((twitter_link) => {
      this.validate_twitter_link(twitter_link_error_control as FormControl);
    });
    const linkedin_link_error_control =
      this.social_link_form.get('linkedin_link');
    linkedin_link_error_control?.valueChanges.subscribe((linkedin_link) => {
      this.validate_linkedin_link(linkedin_link_error_control as FormControl);
    });
    const github_link_error_control = this.social_link_form.get('github_link');
    github_link_error_control?.valueChanges.subscribe((github_link) => {
      this.validate_github_link(github_link_error_control as FormControl);
    });

    const skills_error_control = this.skills_form.get('skills');
    skills_error_control?.valueChanges.subscribe((skills) => {
      this.validate_skills(skills_error_control as FormControl);
    });
  }

  //facebook_link
  facebook_link_error_alert_msg: boolean | undefined;
  validate_facebook_link(facebook_link_error_control: FormControl): void {
    this.facebook_link_error_message = ' ';
    this.facebook_link_error_alert_msg = false;
    if (
      facebook_link_error_control.invalid &&
      (facebook_link_error_control.touched || facebook_link_error_control.dirty)
    ) {
      this.facebook_link_error_alert_msg = true;
      // if(facebook_link_error_control.errors?.['required']){
      //   this.facebook_link_error_message= 'Publication_link is required';
      // }
      if (facebook_link_error_control.errors?.['pattern']) {
        this.facebook_link_error_message = 'Give a valid facebook link pattern';
      }
    }
  }
  //twitter_link
  twitter_link_error_alert_msg: boolean | undefined;
  validate_twitter_link(twitter_link_error_control: FormControl): void {
    this.twitter_link_error_message = ' ';
    this.twitter_link_error_alert_msg = false;
    if (
      twitter_link_error_control.invalid &&
      (twitter_link_error_control.touched || twitter_link_error_control.dirty)
    ) {
      this.twitter_link_error_alert_msg = true;
      // if(facebook_link_error_control.errors?.['required']){
      //   this.facebook_link_error_message= 'Publication_link is required';
      // }
      if (twitter_link_error_control.errors?.['pattern']) {
        this.twitter_link_error_message = 'Give a valid twitter link pattern';
      }
    }
  }
  //linkedin_link
  linkedin_link_error_alert_msg: boolean | undefined;
  validate_linkedin_link(linkedin_link_error_control: FormControl): void {
    this.linkedin_link_error_message = ' ';
    this.linkedin_link_error_alert_msg = false;
    if (
      linkedin_link_error_control.invalid &&
      (linkedin_link_error_control.touched || linkedin_link_error_control.dirty)
    ) {
      this.linkedin_link_error_alert_msg = true;
      // if(facebook_link_error_control.errors?.['required']){
      //   this.facebook_link_error_message= 'Publication_link is required';
      // }
      if (linkedin_link_error_control.errors?.['pattern']) {
        this.linkedin_link_error_message = 'Give a valid linkedin link pattern';
      }
    }
  }

  //github_link
  github_link_error_alert_msg: boolean | undefined;
  validate_github_link(github_link_error_control: FormControl): void {
    this.github_link_error_message = ' ';
    this.github_link_error_alert_msg = false;
    if (
      github_link_error_control.invalid &&
      (github_link_error_control.touched || github_link_error_control.dirty)
    ) {
      this.github_link_error_alert_msg = true;
      // if(facebook_link_error_control.errors?.['required']){
      //   this.facebook_link_error_message= 'Publication_link is required';
      // }
      if (github_link_error_control.errors?.['pattern']) {
        this.github_link_error_message = 'Give a valid github link pattern';
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
}
