import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMentorAccountSettingsComponent } from './student-mentor-account-settings.component';

describe('StudentMentorAccountSettingsComponent', () => {
  let component: StudentMentorAccountSettingsComponent;
  let fixture: ComponentFixture<StudentMentorAccountSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMentorAccountSettingsComponent]
    });
    fixture = TestBed.createComponent(StudentMentorAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
