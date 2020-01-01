import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customized-grid-checkboxcell',
  templateUrl: './customized-grid-checkboxcell.component.html',
  styleUrls: ['./customized-grid-checkboxcell.component.scss']
})
export class CustomizedGridCheckboxcellComponent implements OnInit {

  private cellvalue: any;
  mcheckbox: boolean;
  data: boolean;
  constructor() { }

  ngOnInit() {
  }
  agInit(params: any) {
    this.cellvalue = params.value;
    this.mcheckbox = params.value;
    this.data = params.value;
  }



}
