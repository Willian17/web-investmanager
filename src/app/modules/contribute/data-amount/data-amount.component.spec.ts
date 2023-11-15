import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAmountComponent } from './data-amount.component';

describe('DataAmountComponent', () => {
  let component: DataAmountComponent;
  let fixture: ComponentFixture<DataAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAmountComponent]
    });
    fixture = TestBed.createComponent(DataAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
