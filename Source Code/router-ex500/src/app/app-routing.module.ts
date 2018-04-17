import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedComponent, NonAuthenticatedComponent} from './app.component';
import { UserService } from './user.service';
import { ActivateService } from './activate.service';

const routes: Routes = [
  {
    path: 'authenticated',
    component: AuthenticatedComponent,
    canActivate: [
      ActivateService
    ]
  },
  {
    path: '**',
    component: NonAuthenticatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserService, ActivateService]
})
export class AppRoutingModule { }
