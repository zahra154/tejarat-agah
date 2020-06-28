import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IOrderStatusList} from '../../shared/components/stepper/stepper.component';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  statusArray: IOrderStatusList[]= [
    {title: 'ORDERSTEP.1'},
    {title: 'ORDERSTEP.2'},
    {title: 'ORDERSTEP.3'},
    {title: 'ORDERSTEP.4'},
    {title: 'ORDERSTEP.5'},
    {title: 'ORDERSTEP.6'},
  ];

  operatorDropdownFlag= false;
  hotelDropdownFlag= false;
  constructor( ) { }

  ngOnInit() {

  }

  operatorDropdownClick(){
  this.operatorDropdownFlag = !this.operatorDropdownFlag;
  }
  hotelDropdownClick(flag){
    this.hotelDropdownFlag = !this.hotelDropdownFlag;
  }


}
