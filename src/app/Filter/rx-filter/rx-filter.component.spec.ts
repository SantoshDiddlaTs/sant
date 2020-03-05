import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxFilterComponent } from './rx-filter.component';

describe('RxFilterComponent', () => {
  let component: RxFilterComponent;
  let fixture: ComponentFixture<RxFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
