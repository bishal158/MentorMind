import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchOthersCoursesComponent } from './watch-others-courses.component';

describe('WatchOthersCoursesComponent', () => {
  let component: WatchOthersCoursesComponent;
  let fixture: ComponentFixture<WatchOthersCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchOthersCoursesComponent]
    });
    fixture = TestBed.createComponent(WatchOthersCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
