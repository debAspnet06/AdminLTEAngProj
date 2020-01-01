import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import { PurchaseModule } from './purchase/purchase.module';


@NgModule({
  declarations: [PagesComponent, DashBoardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    PurchaseModule
  ]
  
})
export class PagesModule {
}
