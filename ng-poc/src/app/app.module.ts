import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';
import { DragWrapperComponent } from './dynamic-drag/drag-wrapper/drag-wrapper.component';
import { PlaceHolderDirective } from './shared/place-holder.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MainComponent,
    DragWrapperComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
