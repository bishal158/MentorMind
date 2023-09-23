import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareResourcesFormComponent } from './share-resources-form.component';

describe('ShareResourcesFormComponent', () => {
  let component: ShareResourcesFormComponent;
  let fixture: ComponentFixture<ShareResourcesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareResourcesFormComponent]
    });
    fixture = TestBed.createComponent(ShareResourcesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
