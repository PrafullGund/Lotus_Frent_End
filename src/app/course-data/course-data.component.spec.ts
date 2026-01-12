import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDataComponent } from './course-data.component';

describe('CourseDataComponent', () => {
  let component: CourseDataComponent;
  let fixture: ComponentFixture<CourseDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDataComponent]
    });
    fixture = TestBed.createComponent(CourseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
