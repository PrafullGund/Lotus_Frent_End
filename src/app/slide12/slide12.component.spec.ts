import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide12Component } from './slide12.component';

describe('Slide12Component', () => {
  let component: Slide12Component;
  let fixture: ComponentFixture<Slide12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide12Component]
    });
    fixture = TestBed.createComponent(Slide12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
