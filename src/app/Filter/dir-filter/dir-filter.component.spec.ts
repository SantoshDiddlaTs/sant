import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirFilterComponent } from './dir-filter.component';

describe('DirFilterComponent', () => {
  let component: DirFilterComponent;
  let fixture: ComponentFixture<DirFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
