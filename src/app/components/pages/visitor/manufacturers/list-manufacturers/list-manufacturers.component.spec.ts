import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManufacturersComponent } from './list-manufacturers.component';

describe('ListManufacturersComponent', () => {
  let component: ListManufacturersComponent;
  let fixture: ComponentFixture<ListManufacturersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListManufacturersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
