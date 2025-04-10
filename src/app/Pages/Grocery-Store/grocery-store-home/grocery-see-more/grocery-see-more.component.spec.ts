import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerySeeMoreComponent } from './grocery-see-more.component';

describe('GrocerySeeMoreComponent', () => {
  let component: GrocerySeeMoreComponent;
  let fixture: ComponentFixture<GrocerySeeMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrocerySeeMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrocerySeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
