import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndisponibiliteModalComponent } from './indisponibilite-modal.component';

describe('IndisponibiliteModalComponent', () => {
  let component: IndisponibiliteModalComponent;
  let fixture: ComponentFixture<IndisponibiliteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndisponibiliteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndisponibiliteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
