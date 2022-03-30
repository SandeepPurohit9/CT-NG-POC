import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DragWrapperComponent } from './drag-wrapper/drag-wrapper.component';

const routes: Routes = [
  { path: 'go', component: DragWrapperComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class DynamicDragModule { }
