import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOffSpecialModalComponent } from './add-off-special-modal.component';

describe('AddOffSpecialModalComponent', () => {
  let component: AddOffSpecialModalComponent;
  let fixture: ComponentFixture<AddOffSpecialModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOffSpecialModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOffSpecialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
