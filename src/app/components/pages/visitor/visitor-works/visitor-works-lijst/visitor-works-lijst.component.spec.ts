import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorWorksLijstComponent } from './visitor-works-lijst.component';

describe('VisitorWorksLijstComponent', () => {
  let component: VisitorWorksLijstComponent;
  let fixture: ComponentFixture<VisitorWorksLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorWorksLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorWorksLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
