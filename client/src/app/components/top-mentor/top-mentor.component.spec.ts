import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMentorComponent } from './top-mentor.component';

describe('TopMentorComponent', () => {
  let component: TopMentorComponent;
  let fixture: ComponentFixture<TopMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMentorComponent]
    });
    fixture = TestBed.createComponent(TopMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
