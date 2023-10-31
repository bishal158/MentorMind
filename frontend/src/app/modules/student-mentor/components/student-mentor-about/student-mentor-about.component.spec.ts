import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMentorAboutComponent } from './student-mentor-about.component';

describe('StudentMentorAboutComponent', () => {
  let component: StudentMentorAboutComponent;
  let fixture: ComponentFixture<StudentMentorAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMentorAboutComponent]
    });
    fixture = TestBed.createComponent(StudentMentorAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
