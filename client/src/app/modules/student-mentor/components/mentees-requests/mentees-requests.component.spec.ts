import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteesRequestsComponent } from './mentees-requests.component';

describe('MenteesRequestsComponent', () => {
  let component: MenteesRequestsComponent;
  let fixture: ComponentFixture<MenteesRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenteesRequestsComponent]
    });
    fixture = TestBed.createComponent(MenteesRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
