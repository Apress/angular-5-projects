import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PepperoniComponent, EverythingComponent} from './app.component';

const routes: Routes = [
  { path: '',   
    redirectTo: '/pepperoni', 
    pathMatch: 'full' 
  },
  {
    path: 'pepperoni',
    component: PepperoniComponent
  },
  {
    path: 'everything/:size',
    component: EverythingComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
