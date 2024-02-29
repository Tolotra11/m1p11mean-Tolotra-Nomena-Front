import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOffModalComponent } from './delete-off-modal.component';

describe('DeleteOffModalComponent', () => {
  let component: DeleteOffModalComponent;
  let fixture: ComponentFixture<DeleteOffModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteOffModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteOffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
