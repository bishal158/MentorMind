import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllYourBlogsComponent } from './all-your-blogs.component';

describe('AllYourBlogsComponent', () => {
  let component: AllYourBlogsComponent;
  let fixture: ComponentFixture<AllYourBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllYourBlogsComponent]
    });
    fixture = TestBed.createComponent(AllYourBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
