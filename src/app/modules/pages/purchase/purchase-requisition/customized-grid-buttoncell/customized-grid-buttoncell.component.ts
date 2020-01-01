import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { CmToCmService } from '../../purchase-service/cm-to-cm.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customized-grid-buttoncell',
  templateUrl: './customized-grid-buttoncell.component.html',
  styleUrls: ['./customized-grid-buttoncell.component.scss']
})
export class CustomizedGridButtoncellComponent implements OnInit, ICellRendererAngularComp {
  private cellvalue: any;
  constructor( private _eventEmiter: CmToCmService,private toastr: ToastrService) { }

  // newMessage() {
  //   this._eventEmiter.changeMessage("Hello from Sibling")
  //   this.toastr.success(this.cellvalue);
  // }

  ngOnInit() {

    //this._eventEmiter.currentMessage.subscribe(message => this.cellvalue = message)

  }
  agInit(params: any) {
    this.cellvalue = params.value;
  }
  refresh(params: any): boolean {
    this.cellvalue = params.value;

    return true;

  }
}
