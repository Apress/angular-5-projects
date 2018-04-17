import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from '../sales/sales.component';
import { SupportComponent } from '../support/support.component';

const routes: Routes = [
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: '**',
    component: SalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
