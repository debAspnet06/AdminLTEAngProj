import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CmToCmService } from '../../purchase-service/cm-to-cm.service';
import { Idata } from '../../purchase-service/idata';

@Component({
  selector: 'app-ag-grid-edit',
  templateUrl: './ag-grid-edit.component.html',
  styleUrls: ['./ag-grid-edit.component.scss']
})


export class AgGridEditComponent implements OnInit {

  ilist: Idata;
  params: any;
  iListRow: Idata;
  txtUSerID: number;
  txtID: number;
  txtTitle: string;
  chkCompleted: boolean;
  isDel: string;

  @Output() saveDataToPurchaseGrid: EventEmitter<Idata> = new EventEmitter<Idata>();

  constructor(private cmservice: CmToCmService) { }

  saveDataToGrid() {



    this.ilist = {
      userId: this.txtUSerID,
      id: this.txtID,
      title: this.txtTitle,
      completed: this.chkCompleted

    }
    this.txtUSerID = null;
    this.txtID = null;
    this.txtTitle = "";
    this.chkCompleted = false;

    this.saveDataToPurchaseGrid.emit(this.ilist)


  }

  ngOnInit() {

    
    this.cmservice.getEmployeeDetail().subscribe(data => {
      this.ilist = data;
      this.isDel = sessionStorage.getItem('agGridDel');
      if (this.isDel == 'Y') {
        this.saveDataToPurchaseGrid.emit(this.ilist)
      }
      else {
        this.txtTitle = this.ilist.title;
        this.txtID = this.ilist.id;
        this.txtUSerID = this.ilist.userId;
        this.chkCompleted = this.ilist.completed;
      }
    });



  }

}
