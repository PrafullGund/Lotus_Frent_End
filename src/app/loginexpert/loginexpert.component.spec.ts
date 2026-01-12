import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginexpertComponent } from './loginexpert.component';

describe('LoginexpertComponent', () => {
  let component: LoginexpertComponent;
  let fixture: ComponentFixture<LoginexpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginexpertComponent]
    });
    fixture = TestBed.createComponent(LoginexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
