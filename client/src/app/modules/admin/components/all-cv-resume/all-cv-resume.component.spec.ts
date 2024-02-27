import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCvResumeComponent } from './all-cv-resume.component';

describe('AllCvResumeComponent', () => {
  let component: AllCvResumeComponent;
  let fixture: ComponentFixture<AllCvResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCvResumeComponent]
    });
    fixture = TestBed.createComponent(AllCvResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
