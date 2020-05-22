import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import {TranslateModule} from '@ngx-translate/core';
import {PipeModule} from "../../Pipes/pipe.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations:
    [CompanyListComponent,
    ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    TranslateModule,
    PipeModule,
    ReactiveFormsModule,

  ],
  exports: [

  ],
})
export class CompanyModule { }
