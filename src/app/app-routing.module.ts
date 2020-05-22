import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '' , redirectTo: 'dashboard'  , pathMatch :'full' },
  {path: 'dashboard' , loadChildren:() => import ('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path: '404' , component:PageNotFoundComponent },
  {path: '**' , redirectTo:'/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: Boolean(history.pushState) === false,
    preloadingStrategy: PreloadAllModules
  } )],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
