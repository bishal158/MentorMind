import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMenteesComponent } from './all-mentees.component';

describe('AllMenteesComponent', () => {
  let component: AllMenteesComponent;
  let fixture: ComponentFixture<AllMenteesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMenteesComponent]
    });
    fixture = TestBed.createComponent(AllMenteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
