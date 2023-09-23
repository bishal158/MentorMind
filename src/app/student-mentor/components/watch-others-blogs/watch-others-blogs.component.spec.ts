import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchOthersBlogsComponent } from './watch-others-blogs.component';

describe('WatchOthersBlogsComponent', () => {
  let component: WatchOthersBlogsComponent;
  let fixture: ComponentFixture<WatchOthersBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchOthersBlogsComponent]
    });
    fixture = TestBed.createComponent(WatchOthersBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
