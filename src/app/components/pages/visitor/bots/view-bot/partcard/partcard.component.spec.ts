import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartcardComponent } from './partcard.component';

describe('PartcardComponent', () => {
  let component: PartcardComponent;
  let fixture: ComponentFixture<PartcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
