import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialHardwareStoreHomeComponent } from './industrial-hardware-store-home.component';

describe('IndustrialHardwareStoreHomeComponent', () => {
  let component: IndustrialHardwareStoreHomeComponent;
  let fixture: ComponentFixture<IndustrialHardwareStoreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialHardwareStoreHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustrialHardwareStoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
