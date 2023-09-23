import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationalQualificationComponent } from './add-educational-qualification.component';

describe('AddEducationalQualificationComponent', () => {
  let component: AddEducationalQualificationComponent;
  let fixture: ComponentFixture<AddEducationalQualificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEducationalQualificationComponent]
    });
    fixture = TestBed.createComponent(AddEducationalQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
