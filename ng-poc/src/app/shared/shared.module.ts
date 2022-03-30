import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn/btn.component';
import { TxtboxComponent } from './txtbox/txtbox.component';



@NgModule({
  declarations: [BtnComponent,
    TxtboxComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
