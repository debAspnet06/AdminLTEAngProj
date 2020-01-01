import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Idata } from './idata';
@Injectable({
  providedIn: 'root'
})
export class CmToCmService {

  
  private cmDataService = new BehaviorSubject<Idata>({
    userId: null,
    id: null,
    title: "",
    completed: false
  });

  private cmDataServiceDel = new BehaviorSubject<boolean>(false);

  getEmployeeDetail() {
    return this.cmDataService.asObservable();
  }
  getdataDel() {
    return this.cmDataServiceDel.asObservable();
  }

  constructor() {

  }
  nextCmDataValue(dtstr: Idata) {

    this.cmDataService.next(dtstr);
    // console.log('Inside Service');
    // console.log(dtstr);
  }

  nextCmDataDel(dtstr: boolean) {

    this.cmDataServiceDel.next(dtstr);
    
  }

}
