import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMessageComponent } from './input-message.component';

describe('InputMessageComponent', () => {
  let component: InputMessageComponent;
  let fixture: ComponentFixture<InputMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputMessageComponent]
    });
    fixture = TestBed.createComponent(InputMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
