import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchBlogsComponent } from './watch-blogs.component';

describe('WatchBlogsComponent', () => {
  let component: WatchBlogsComponent;
  let fixture: ComponentFixture<WatchBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchBlogsComponent]
    });
    fixture = TestBed.createComponent(WatchBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
