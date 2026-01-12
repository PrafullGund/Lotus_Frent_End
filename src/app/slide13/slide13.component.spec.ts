import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide13Component } from './slide13.component';

describe('Slide13Component', () => {
  let component: Slide13Component;
  let fixture: ComponentFixture<Slide13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide13Component]
    });
    fixture = TestBed.createComponent(Slide13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
