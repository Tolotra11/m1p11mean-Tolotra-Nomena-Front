import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRdvComponent } from './cancel-rdv.component';

describe('CancelRdvComponent', () => {
  let component: CancelRdvComponent;
  let fixture: ComponentFixture<CancelRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelRdvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
