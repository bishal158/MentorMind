import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadResourcesComponent } from './download-resources.component';

describe('DownloadResourcesComponent', () => {
  let component: DownloadResourcesComponent;
  let fixture: ComponentFixture<DownloadResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadResourcesComponent]
    });
    fixture = TestBed.createComponent(DownloadResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
