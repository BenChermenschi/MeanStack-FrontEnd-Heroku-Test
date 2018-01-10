import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBotsItemComponent } from './list-bots-item.component';

describe('ListBotsItemComponent', () => {
  let component: ListBotsItemComponent;
  let fixture: ComponentFixture<ListBotsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBotsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBotsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
