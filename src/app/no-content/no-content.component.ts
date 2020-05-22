import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {timer} from 'rxjs';

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent implements OnInit , OnDestroy {
  subTimeout;
  constructor( private router: Router ) { }

  ngOnInit() {
    this.subTimeout = timer(3000).subscribe(() => {
      this.router.navigate(['/dashboard/invoices/invoice-list']);
    });
  }
  ngOnDestroy() {
    this.subTimeout.unsubscribe();
  }

}
