import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  constructor() { }

  operatorDropdownFlag= false;
  hotelDropdownFlag= false;
  ngOnInit() {
  }

  operatorDropdownClick(){
  this.operatorDropdownFlag = !this.operatorDropdownFlag;
  }
  hotelDropdownClick(flag){
    this.hotelDropdownFlag = !this.hotelDropdownFlag;
  }


}
