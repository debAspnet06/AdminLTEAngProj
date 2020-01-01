import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRequisitionComponent } from './purchase-requisition/purchase-requisition.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { CustomizedGridCellComponent } from './purchase-requisition/customized-grid-cell/customized-grid-cell.component';
import { FormsModule } from '@angular/forms';
import { CustomizedGridButtoncellComponent } from './purchase-requisition/customized-grid-buttoncell/customized-grid-buttoncell.component';
import { CustomizedGridCheckboxcellComponent } from './purchase-requisition/customized-grid-checkboxcell/customized-grid-checkboxcell.component';
import { CmToCmService } from './purchase-service/cm-to-cm.service';
import { CustomizedCellCmComponent } from './purchase-requisition/customized-cell-cm/customized-cell-cm.component';
import { AgGridEditComponent } from './purchase-requisition/ag-grid-edit/ag-grid-edit.component';
import { DemoModalComponent } from './purchase-requisition/demo-modal/demo-modal.component';


@NgModule({
  declarations:
    [
      PurchaseRequisitionComponent
      , CustomizedGridCellComponent
      , CustomizedGridButtoncellComponent
      , CustomizedGridCheckboxcellComponent
      , CustomizedCellCmComponent, AgGridEditComponent, DemoModalComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [CmToCmService], entryComponents: [CustomizedCellCmComponent, CustomizedGridCheckboxcellComponent],
  exports: [PurchaseRequisitionComponent]
})
export class PurchaseModule {
}
