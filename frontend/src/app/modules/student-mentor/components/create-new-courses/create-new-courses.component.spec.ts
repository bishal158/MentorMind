import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCoursesComponent } from './create-new-courses.component';

describe('CreateNewCoursesComponent', () => {
  let component: CreateNewCoursesComponent;
  let fixture: ComponentFixture<CreateNewCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewCoursesComponent]
    });
    fixture = TestBed.createComponent(CreateNewCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
