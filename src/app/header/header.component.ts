import { Component, OnInit } from '@angular/core';
import {LSSharedLanguage} from '../app.component';
import {Router} from '@angular/router';
import {RestService} from '../../Services/rest.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'fadeAnimation', [
        transition(
          ':enter',
          [
            style(
              {opacity: 0}
            ),
            animate(
              '400ms',
              style(
                {opacity: 1}
              )
            )
          ]
        ),
        transition(
          ':leave',
          [
            style(
              {opacity: 1}
            ),
            animate(
              '400ms',
              style(
                {opacity: 0}
              )
            )
          ]
        )
      ]
    )
  ]
})
export class HeaderComponent implements OnInit {
  chosenLang;
  lastName;
  UserName;
  isAdmin;
  adminTxt: string;
  token;
  slideMenuIsOpen = false;
  operatorDropdownFlag: boolean;

  constructor( private router: Router , private _services: RestService) {
  }

  ngOnInit() {

    this.isAdmin = localStorage.getItem('isAdminAuthorization');
    this.token= localStorage.getItem('token');
    console.log(this.UserName, this.lastName,this.isAdmin );
    if(this.isAdmin =='isAdmin'){
      this.adminTxt ='Admin';
    }
    else{
      this.adminTxt = 'Operator';
    }
  }


  SlideMenu(toggle: boolean) {
    this.slideMenuIsOpen = toggle;
  }

  operatorDropdownClick(){
    this.operatorDropdownFlag = !this.operatorDropdownFlag;
  }



}
