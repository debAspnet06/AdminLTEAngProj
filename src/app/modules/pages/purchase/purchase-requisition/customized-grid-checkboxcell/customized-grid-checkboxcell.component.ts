import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-customized-grid-checkboxcell',
  templateUrl: './customized-grid-checkboxcell.component.html',
  styleUrls: ['./customized-grid-checkboxcell.component.scss']
})
export class CustomizedGridCheckboxcellComponent implements OnInit {

  private cellvalue: any;
  mcheckbox: boolean;
  params: any;
  data: boolean;
  constructor() { }

  ngOnInit() {
  }
  agInit(params: any) {
    this.params = params;
    this.data = params.value;
  }
  

}
