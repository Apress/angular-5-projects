import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent, PleaseSelectComponent } from './app.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    component: PleaseSelectComponent,
    children: []
  },
  {
    pathMatch: 'full',
    path: 'detail',
    component: DetailComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
