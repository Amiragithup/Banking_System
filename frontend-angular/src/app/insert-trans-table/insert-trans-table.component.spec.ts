import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTransTableComponent } from './insert-trans-table.component';

describe('InsertTransTableComponent', () => {
  let component: InsertTransTableComponent;
  let fixture: ComponentFixture<InsertTransTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertTransTableComponent]
    });
    fixture = TestBed.createComponent(InsertTransTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
