import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialHardwareSeeMoreComponent } from './industrial-hardware-see-more.component';

describe('IndustrialHardwareSeeMoreComponent', () => {
  let component: IndustrialHardwareSeeMoreComponent;
  let fixture: ComponentFixture<IndustrialHardwareSeeMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialHardwareSeeMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustrialHardwareSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
