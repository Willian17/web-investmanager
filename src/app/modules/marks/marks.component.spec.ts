import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksComponent } from './marks.component';

describe('MarksComponent', () => {
  let component: MarksComponent;
  let fixture: ComponentFixture<MarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarksComponent]
    });
    fixture = TestBed.createComponent(MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
