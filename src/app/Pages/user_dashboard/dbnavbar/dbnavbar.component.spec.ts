import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbnavbarComponent } from './dbnavbar.component';

describe('DbnavbarComponent', () => {
  let component: DbnavbarComponent;
  let fixture: ComponentFixture<DbnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
