import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { CustomizedGridCellComponent } from './customized-grid-cell/customized-grid-cell.component';
import { CustomizedGridButtoncellComponent } from './customized-grid-buttoncell/customized-grid-buttoncell.component';
import { CustomizedGridCheckboxcellComponent } from './customized-grid-checkboxcell/customized-grid-checkboxcell.component';
import { CustomizedCellCmComponent } from './customized-cell-cm/customized-cell-cm.component';
import { Idata } from '../purchase-service/idata';
//import { GridOptions } from 'ag-grid';

declare var $;
@Component({
  selector: 'app-purchase-requisition',
  templateUrl: './purchase-requisition.component.html',
  styleUrls: ['./purchase-requisition.component.scss']
})
export class PurchaseRequisitionComponent implements OnInit {




  private gridApi;
  private isDel: string;
  private listIndex: number;
  private gridOptions: any;
  private gridColumnApi;
  private searchValue;
  private columnDefs;
  private frameworkComponents;
  public Iobjdatalist: Array<Idata> =
    [{
      "userId": 0
      , "id": 0
      , "title": "0"
      , "completed": false

    }];
  ilist: any = [];



  constructor(private toastr: ToastrService, private http: HttpClient) {
    this.gridOptions = {
      context: { componentParent: this }
    }
  }
  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  showUpdatedItem(newItem) {

    if (newItem.id == null) {
      //Insert Code
      newItem.id = this.Iobjdatalist.length + 1;
      this.Iobjdatalist.push({
        userId: newItem.userId,
        id: newItem.id,
        title: newItem.title,
        completed: newItem.completed
      })
      this.toastr.success('Insertion Successful', 'ERP');
    }
    else {
      this.isDel = sessionStorage.getItem('agGridDel');

      debugger

      if (this.isDel == 'Y') {
        //Delete Record
        let updateItem = this.Iobjdatalist.find(this.findIndexToUpdate, newItem.id);
        let index = this.Iobjdatalist.indexOf(updateItem);
        this.listIndex = index;

        //To modify Only Grid Data
        //this.updateRow(this.listIndex, newItem);

        //To Modify Grid Data Source
        this.Iobjdatalist.splice(index, 1);
        this.toastr.info('Deletion Successful', 'ERP');
      }
      else if (this.isDel == 'N') {

        //Update Code
        let updateItem = this.Iobjdatalist.find(this.findIndexToUpdate, newItem.id);
        let index = this.Iobjdatalist.indexOf(updateItem);
        this.listIndex = index;

        //To modify Only Grid Data
        //this.updateRow(this.listIndex, newItem);

        //To Modify Grid Data Source
        this.Iobjdatalist[index] = newItem;
        this.toastr.info('Updation Successful', 'ERP');
      }

    }





    this.updateGridDataSource();

  }

  onsaveDataToPurchaseGrid(iListData: Idata) {

    this.showUpdatedItem(iListData)


  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.loadRemoteData(params);


  }

  updateRow(indx, newItem: Idata) {


    var rowNode = this.gridApi.getRowNode(indx);
    rowNode.setData(newItem);
  }

  updateGridDataSource() {
    this.gridApi.setRowData([]);
    var newData = this.Iobjdatalist;
    this.gridApi.updateRowData({ add: newData });
  }



  updateCell() {
    var rowNode = this.gridApi.getRowNode(1);
    rowNode.setDataValue("title", "0");
  }


  loadRemoteData(params) {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos/")
      .subscribe(data => {

        this.ilist = data;


        this.Iobjdatalist =
          [{
            "userId": 0
            , "id": 0
            , "title": "0"
            , "completed": false

          }];
        this.Iobjdatalist.splice(0, 1);

        for (let entryKL of this.ilist) {
          this.Iobjdatalist.push({
            "userId": entryKL["userId"]
            , "id": entryKL["id"]
            , "title": entryKL["title"]
            , "completed": entryKL["completed"]

          });
        }
        params.api.setRowData(this.Iobjdatalist)

      })

  }



  ngOnInit() {



    this.columnDefs = [
      { headerName: 'User ID', field: 'userId', width: '150', pinned: 'left' },
      { headerName: 'Id', field: 'id' },
      { headerName: 'Title', field: 'title', width: '400' },
      { headerName: 'Completed', field: 'completed', width: '100', cellRendererFramework: CustomizedGridCheckboxcellComponent },
      { headerName: 'Action', field: 'id', width: '200', cellRendererFramework: CustomizedCellCmComponent },

    ];


    //Date picker
    $('.datepicker').datepicker({
      autoclose: true
    })
  }
  showSuccess() {
    this.toastr.warning('space is running out', 'ERP');
  }



}
