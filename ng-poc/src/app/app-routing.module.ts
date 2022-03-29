import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'users', component: UsersComponent },
  { path: 'wells', loadChildren: () => import('./wells/wells.module').then(m => m.WellsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
