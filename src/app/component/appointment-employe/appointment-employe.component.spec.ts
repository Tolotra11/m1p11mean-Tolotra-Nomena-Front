import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentEmployeComponent } from './appointment-employe.component';

describe('AppointmentEmployeComponent', () => {
  let component: AppointmentEmployeComponent;
  let fixture: ComponentFixture<AppointmentEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentEmployeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
