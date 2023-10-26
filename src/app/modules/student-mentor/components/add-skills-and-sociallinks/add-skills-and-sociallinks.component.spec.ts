import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillsAndSociallinksComponent } from './add-skills-and-sociallinks.component';

describe('AddSkillsAndSociallinksComponent', () => {
  let component: AddSkillsAndSociallinksComponent;
  let fixture: ComponentFixture<AddSkillsAndSociallinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSkillsAndSociallinksComponent]
    });
    fixture = TestBed.createComponent(AddSkillsAndSociallinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
