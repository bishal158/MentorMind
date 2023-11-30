import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignYourCourseComponent } from './design-your-course.component';

describe('DesignYourCourseComponent', () => {
  let component: DesignYourCourseComponent;
  let fixture: ComponentFixture<DesignYourCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignYourCourseComponent]
    });
    fixture = TestBed.createComponent(DesignYourCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
