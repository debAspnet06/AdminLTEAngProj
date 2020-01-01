import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { CmToCmService } from '../../purchase-service/cm-to-cm.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customized-grid-cell',
  templateUrl: './customized-grid-cell.component.html',
  styleUrls: ['./customized-grid-cell.component.scss']
})
export class CustomizedGridCellComponent implements OnInit {

  params: any;
  data: any;
  sub: Subscription;

  constructor(private cmservice: CmToCmService) { }

  ngOnInit() {

    // this._eventEmitter.currentMessage.subscribe(message => this.cellvalue = message)
    // this.cmservice.cmDataService.subscribe(c => {
    //   this.cellvalue = c;
    // });

    // this.cmservice.cmDataService.subscribe(c => {
    //   this.data = c;
    // });


  }


  agInit(params: any) {
    //this.cellvalue = params.value;

    this.params = params;
    this.data = params.value;
  }


}
