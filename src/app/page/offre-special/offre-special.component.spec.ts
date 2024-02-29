import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreSpecialComponent } from './offre-special.component';

describe('OffreSpecialComponent', () => {
  let component: OffreSpecialComponent;
  let fixture: ComponentFixture<OffreSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffreSpecialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffreSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
