import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';


export interface IOrderStatusList {
  title: string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() list: IOrderStatusList[] = [];

 currentIndex: number = 2;
  routerSubscription: Subscription;
  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe(
      (data) => {
        if (data instanceof NavigationEnd){
          const lastPath = data.urlAfterRedirects.split('/').slice(-1)[0];
          const pathLength = data.urlAfterRedirects.split('/').length;
          const patharray = data.urlAfterRedirects.split('/');
          // console.log('path' ,patharray[pathLength-2], patharray[pathLength-1 ]);
          const path =[];
          path.push(patharray[pathLength-1],patharray[pathLength-2]);
          // console.log('path final' , path);
          path.forEach(elm =>{
            switch (elm){
              case '':
                this.currentIndex = 0;
                break;
              case 'company-list':
                this.currentIndex = 0;
                break;
              case 'edit-invoice':
                this.currentIndex = 0;
                break;
              case 'select-customer':
                this.currentIndex = 1;
                break;
              case 'select-tour':
                this.currentIndex = 2;
                break;
              case 'select-invoice-items':
                this.currentIndex = 3;
                break;
              case 'factor':
                this.currentIndex = 4;
                break;
            }
          });
          /* switch (lastPath){
           case '':
             this.statusCurrentIndex = 0;
             break;
           case 'new-invoice':
             this.statusCurrentIndex = 0;
             break;
           case 'edit-invoice':
             this.statusCurrentIndex = 0;
             break;
           case 'select-customer':
             this.statusCurrentIndex = 1;
             break;
           case 'select-tour':
             this.statusCurrentIndex = 2;
             break;
           case 'select-invoice-items':
             this.statusCurrentIndex = 3;
             break;
           case 'factor':
             this.statusCurrentIndex = 4;
             break;
         }*/

          /*   else {
               debugger
               const lastPath = data.urlAfterRedirects.split('/').slice(-2,-1);
               switch (lastPath){

                 case '':
                   this.statusCurrentIndex = 0;
                   break;
                 case 'new-invoice':
                   this.statusCurrentIndex = 0;
                   break;
                 case 'edit-invoice':
                   this.statusCurrentIndex = 0;
                   break;
                 case 'select-customer':
                   this.statusCurrentIndex = 1;
                   break;
                 case 'select-tour':
                   this.statusCurrentIndex = 2;
                   break;
                 case 'select-invoice-items':
                   this.statusCurrentIndex = 3;
                   break;
                 case 'factor':
                   this.statusCurrentIndex = 4;
                   break;
               }
             }*/

        }
      }
    );
  }

  ngOnInit(): void {
  }

}
