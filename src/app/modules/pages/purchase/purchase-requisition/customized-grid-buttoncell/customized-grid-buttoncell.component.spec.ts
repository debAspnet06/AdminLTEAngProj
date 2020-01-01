import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedGridButtoncellComponent } from './customized-grid-buttoncell.component';

describe('CustomizedGridButtoncellComponent', () => {
  let component: CustomizedGridButtoncellComponent;
  let fixture: ComponentFixture<CustomizedGridButtoncellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedGridButtoncellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedGridButtoncellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
