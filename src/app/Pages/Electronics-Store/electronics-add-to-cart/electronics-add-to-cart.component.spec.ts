import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsAddToCartComponent } from './electronics-add-to-cart.component';

describe('ElectronicsAddToCartComponent', () => {
  let component: ElectronicsAddToCartComponent;
  let fixture: ComponentFixture<ElectronicsAddToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicsAddToCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectronicsAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
