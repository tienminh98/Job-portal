import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBillsComponent } from './detail-bills.component';

describe('DetailBillsComponent', () => {
  let component: DetailBillsComponent;
  let fixture: ComponentFixture<DetailBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
