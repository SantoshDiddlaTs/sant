import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateBydayComponent } from './date-byday.component';

describe('DateBydayComponent', () => {
  let component: DateBydayComponent;
  let fixture: ComponentFixture<DateBydayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateBydayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateBydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
