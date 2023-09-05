import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMentorComponent } from './student-mentor.component';

describe('StudentMentorComponent', () => {
  let component: StudentMentorComponent;
  let fixture: ComponentFixture<StudentMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMentorComponent]
    });
    fixture = TestBed.createComponent(StudentMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
