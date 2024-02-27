import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMentorInfoComponent } from './student-mentor-info.component';

describe('StudentMentorInfoComponent', () => {
  let component: StudentMentorInfoComponent;
  let fixture: ComponentFixture<StudentMentorInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMentorInfoComponent]
    });
    fixture = TestBed.createComponent(StudentMentorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
