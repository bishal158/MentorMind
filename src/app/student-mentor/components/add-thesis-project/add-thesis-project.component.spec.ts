import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThesisProjectComponent } from './add-thesis-project.component';

describe('AddThesisProjectComponent', () => {
  let component: AddThesisProjectComponent;
  let fixture: ComponentFixture<AddThesisProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddThesisProjectComponent]
    });
    fixture = TestBed.createComponent(AddThesisProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
