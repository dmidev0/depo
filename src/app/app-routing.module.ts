import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {IndexComponent} from './index/index.component';
import {storeRoutes} from './store/store-routing.module';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: IndexComponent,
  // },
  {
    path: 'store',
    children: storeRoutes,
  },
  {
    path: '**',
    redirectTo: '/store/categories'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
