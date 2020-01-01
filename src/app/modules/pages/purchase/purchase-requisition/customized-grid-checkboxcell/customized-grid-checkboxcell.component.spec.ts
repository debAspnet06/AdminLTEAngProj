import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedGridCheckboxcellComponent } from './customized-grid-checkboxcell.component';

describe('CustomizedGridCheckboxcellComponent', () => {
  let component: CustomizedGridCheckboxcellComponent;
  let fixture: ComponentFixture<CustomizedGridCheckboxcellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedGridCheckboxcellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedGridCheckboxcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
