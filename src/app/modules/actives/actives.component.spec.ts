import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivesComponent } from './actives.component';

describe('ActivesComponent', () => {
  let component: ActivesComponent;
  let fixture: ComponentFixture<ActivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivesComponent]
    });
    fixture = TestBed.createComponent(ActivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
