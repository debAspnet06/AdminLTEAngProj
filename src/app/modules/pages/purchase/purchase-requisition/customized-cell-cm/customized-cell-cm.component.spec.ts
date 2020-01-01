import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedCellCmComponent } from './customized-cell-cm.component';

describe('CustomizedCellCmComponent', () => {
  let component: CustomizedCellCmComponent;
  let fixture: ComponentFixture<CustomizedCellCmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedCellCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedCellCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
