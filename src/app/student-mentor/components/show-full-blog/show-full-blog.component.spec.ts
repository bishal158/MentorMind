import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFullBlogComponent } from './show-full-blog.component';

describe('ShowFullBlogComponent', () => {
  let component: ShowFullBlogComponent;
  let fixture: ComponentFixture<ShowFullBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowFullBlogComponent]
    });
    fixture = TestBed.createComponent(ShowFullBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
