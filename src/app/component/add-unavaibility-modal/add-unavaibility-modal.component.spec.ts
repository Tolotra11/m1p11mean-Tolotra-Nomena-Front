import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnavaibilityModalComponent } from './add-unavaibility-modal.component';

describe('AddUnavaibilityModalComponent', () => {
  let component: AddUnavaibilityModalComponent;
  let fixture: ComponentFixture<AddUnavaibilityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUnavaibilityModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUnavaibilityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
