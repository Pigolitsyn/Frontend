import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoloyeesTableComponent } from './empoloyees-table.component';

describe('EmpoloyeesTableComponent', () => {
  let component: EmpoloyeesTableComponent;
  let fixture: ComponentFixture<EmpoloyeesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoloyeesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoloyeesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
