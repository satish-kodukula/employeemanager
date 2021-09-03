import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInsertComponent } from './employee-insert.component';

describe('EmployeeInsertComponent', () => {
  let component: EmployeeInsertComponent;
  let fixture: ComponentFixture<EmployeeInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
