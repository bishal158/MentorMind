import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentAskQuestionComponent } from './frequent-ask-question.component';

describe('FrequentAskQuestionComponent', () => {
  let component: FrequentAskQuestionComponent;
  let fixture: ComponentFixture<FrequentAskQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequentAskQuestionComponent]
    });
    fixture = TestBed.createComponent(FrequentAskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
