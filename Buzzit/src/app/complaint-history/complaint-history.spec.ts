import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintHistory } from './complaint-history';

describe('ComplaintHistory', () => {
  let component: ComplaintHistory;
  let fixture: ComponentFixture<ComplaintHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
