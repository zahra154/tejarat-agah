import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,


  ],
  providers: [],
  exports: [
    PageNotFoundComponent
  ]
})
export class SharedModule { }
