import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllYourCoursesComponent } from './all-your-courses.component';

describe('AllYourCoursesComponent', () => {
  let component: AllYourCoursesComponent;
  let fixture: ComponentFixture<AllYourCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllYourCoursesComponent]
    });
    fixture = TestBed.createComponent(AllYourCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
