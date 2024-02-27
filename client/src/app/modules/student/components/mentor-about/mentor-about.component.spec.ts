import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAboutComponent } from './mentor-about.component';

describe('MentorAboutComponent', () => {
  let component: MentorAboutComponent;
  let fixture: ComponentFixture<MentorAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorAboutComponent]
    });
    fixture = TestBed.createComponent(MentorAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
