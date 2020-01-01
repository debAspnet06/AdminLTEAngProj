import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CmToCmService } from '../../purchase-service/cm-to-cm.service';
import { Idata } from '../../purchase-service/idata';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})
export class DemoModalComponent implements OnInit {


  @Output() saveDataToPurchaseGrid: EventEmitter<Idata> = new EventEmitter<Idata>();

  ilist: Idata;
  modalOOn: string;
  dbool: boolean;
  isDel: string;
  messagebody: string;
  constructor(private cmservice: CmToCmService) { }

  onDeleteConfirm() {
    this.saveDataToPurchaseGrid.emit(this.ilist);
  }

  ngOnInit() {

    this.cmservice.getEmployeeDetail().subscribe(data => {
      this.ilist = data;
      this.messagebody = this.ilist.title;

      //Open Deletion popup
      this.modalOOn = sessionStorage.getItem('modalOn');
      if (this.modalOOn == 'Y') {
        let element: HTMLElement = document.getElementById('btnModalClick') as HTMLElement;
        element.click();
        sessionStorage.setItem('modalOn', 'N');
      }


    });
  }
}
