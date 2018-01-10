import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorWorksComponent } from './visitor-works.component';

describe('VisitorWorksComponent', () => {
  let component: VisitorWorksComponent;
  let fixture: ComponentFixture<VisitorWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
