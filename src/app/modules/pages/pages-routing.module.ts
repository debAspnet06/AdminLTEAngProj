import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PurchaseRequisitionComponent } from './purchase/purchase-requisition/purchase-requisition.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'dash', component: DashBoardComponent },
      { path: '', component: PurchaseRequisitionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
