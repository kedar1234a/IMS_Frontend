import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryStoreHomeComponent } from './grocery-store-home.component';

describe('GroceryStoreHomeComponent', () => {
  let component: GroceryStoreHomeComponent;
  let fixture: ComponentFixture<GroceryStoreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryStoreHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroceryStoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
