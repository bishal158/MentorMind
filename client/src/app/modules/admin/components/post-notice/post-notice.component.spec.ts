import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNoticeComponent } from './post-notice.component';

describe('PostNoticeComponent', () => {
  let component: PostNoticeComponent;
  let fixture: ComponentFixture<PostNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostNoticeComponent]
    });
    fixture = TestBed.createComponent(PostNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
