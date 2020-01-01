import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Idata } from './idata';
@Injectable({
  providedIn: 'root'
})
export class CmToCmService {

  params: Idata;
  counter = 1;
  private cmDataService = new BehaviorSubject<Idata>({
      userId: null,
      id: null,
      title: "",
      completed: false
    });
 

  getEmployeeDetail() {
    return this.cmDataService.asObservable()  ;
  }
  constructor() {
    
  }
  nextCmDataValue(dtstr: Idata) {

    this.cmDataService.next(dtstr);
    // console.log('Inside Service');
    // console.log(dtstr);
  }

}
