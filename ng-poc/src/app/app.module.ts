import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';
import { WellsModule } from './wells/wells.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WellsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
