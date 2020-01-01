import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridEditComponent } from './ag-grid-edit.component';

describe('AgGridEditComponent', () => {
  let component: AgGridEditComponent;
  let fixture: ComponentFixture<AgGridEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
