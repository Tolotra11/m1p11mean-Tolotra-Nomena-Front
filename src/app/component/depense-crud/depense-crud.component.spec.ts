import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenseCrudComponent } from './depense-crud.component';

describe('DepenseCrudComponent', () => {
  let component: DepenseCrudComponent;
  let fixture: ComponentFixture<DepenseCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepenseCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepenseCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
