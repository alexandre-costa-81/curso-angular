import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { SignInComponent } from './home/signin/signin.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path: '', component: SignInComponent, canActivate: [AuthGuard]},
  {path: 'user/:userName', component: PhotoListComponent},
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
