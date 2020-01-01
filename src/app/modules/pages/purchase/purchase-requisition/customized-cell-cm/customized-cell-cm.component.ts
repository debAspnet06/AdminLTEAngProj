import { Component, OnInit } from '@angular/core';
import { CmToCmService } from '../../purchase-service/cm-to-cm.service';
import { Idata } from '../../purchase-service/idata';


@Component({
  selector: 'app-customized-cell-cm',
  templateUrl: './customized-cell-cm.component.html',
  styleUrls: ['./customized-cell-cm.component.scss']
})
export class CustomizedCellCmComponent implements OnInit {

  public popoverTitle: string = 'Popover title';
  public popoverMessage: string = 'Popover description';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  count: number;
  iListArr: Idata;
  params: any;
  data: any;
  constructor(private cmservice: CmToCmService) { }

  agInit(params) {
    this.params = params;
    this.data = params.value;
  }
  ngOnInit() {

  }

  nextCount() {
    sessionStorage.setItem('agGridDel', 'N');
    this.iListArr = this.params.data;
    this.cmservice.nextCmDataValue(this.iListArr);

  }
  delRecord() {

    sessionStorage.setItem('agGridDel', 'Y');
    sessionStorage.setItem('modalOn', 'Y');
    
    this.iListArr = this.params.data;
    this.cmservice.nextCmDataDel(true);
    this.cmservice.nextCmDataValue(this.iListArr);
    


  }
}
