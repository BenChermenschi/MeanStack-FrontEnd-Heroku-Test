import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerListItemComponent } from './manufacturer-list-item.component';

describe('ManufacturerListItemComponent', () => {
  let component: ManufacturerListItemComponent;
  let fixture: ComponentFixture<ManufacturerListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
