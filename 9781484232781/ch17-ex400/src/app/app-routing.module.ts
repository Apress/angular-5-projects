import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent, Component1, Component2 } from './app.component';

const routes: Routes = [
  {
    path: 'component1',
    component: Component1
  },
  {
    path: 'component2',
    component: Component2
  },
  {
    path: '**',
    component: Component1
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
