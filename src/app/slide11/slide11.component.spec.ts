import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide11Component } from './slide11.component';

describe('Slide11Component', () => {
  let component: Slide11Component;
  let fixture: ComponentFixture<Slide11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide11Component]
    });
    fixture = TestBed.createComponent(Slide11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
