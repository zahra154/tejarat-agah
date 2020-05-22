import {DashboardMainComponent} from './dashboard-main/dashboard-main.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {
    path: '', component: DashboardMainComponent  ,
    children: [
      {
        path: 'company', loadChildren:
          () => import('./company/company.module').then(m => m.CompanyModule)
      },
      {
        path: 'product', loadChildren:
          () => import('./product/product.module').then(m => m.ProductModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
