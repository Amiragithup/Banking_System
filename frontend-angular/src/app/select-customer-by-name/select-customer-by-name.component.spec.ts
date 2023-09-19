import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomerByNameComponent } from './select-customer-by-name.component';

describe('SelectCustomerByNameComponent', () => {
  let component: SelectCustomerByNameComponent;
  let fixture: ComponentFixture<SelectCustomerByNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCustomerByNameComponent]
    });
    fixture = TestBed.createComponent(SelectCustomerByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
