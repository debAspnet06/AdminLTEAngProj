import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedGridCellComponent } from './customized-grid-cell.component';

describe('CustomizedGridCellComponent', () => {
  let component: CustomizedGridCellComponent;
  let fixture: ComponentFixture<CustomizedGridCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedGridCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedGridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
