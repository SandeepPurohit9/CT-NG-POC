import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellListComponent } from './well-list/well-list.component';
import { WellComponent } from './well/well.component';
import { RouterModule, Routes } from '@angular/router';
import { WellWrapperComponent } from './well-wrapper/well-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'go', component: WellWrapperComponent },
];

@NgModule({
  declarations: [
    WellListComponent,
    WellComponent,
    WellWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class WellsModule { }
