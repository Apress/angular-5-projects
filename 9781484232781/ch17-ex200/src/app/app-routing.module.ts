import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PepperoniComponent } from './app.component';
import { OtherComponent } from './app.other-component';
import { NestedPastaComponent, NestedCalzoneComponent } from './app.other-component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pepperoni',
    pathMatch: 'full'
  },
  {
    path: 'pepperoni',
    component: PepperoniComponent
  },
  {
    path: 'other',
    component: OtherComponent,
    children: [
      {
        path: '',
        redirectTo: 'pasta',
        pathMatch: 'full'
      },
      {
        path: 'pasta',
        component: NestedPastaComponent
      },
      {
        path: 'calzone',
        component: NestedCalzoneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
