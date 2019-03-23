import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'store',
    loadChildren: './store/store.module#StoreModule'
  },
  {
    path: '**',
    redirectTo: '/store/betmen-i-uzbeki'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
