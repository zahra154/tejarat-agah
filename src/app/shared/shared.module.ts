import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { StepperComponent } from './components/stepper/stepper.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,


  ],
  providers: [],
  exports: [
    PageNotFoundComponent,
    StepperComponent
  ]
})
export class SharedModule { }
