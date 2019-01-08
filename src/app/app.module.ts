
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@myApp/core';
import { SharedModule } from '@myApp/shared';
import { TaskManagerModule } from './task-manager/task-manager.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    TaskManagerModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
