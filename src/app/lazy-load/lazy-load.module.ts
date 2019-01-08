
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LazyLoadRoutingModule } from './lazy-load-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class LazyLoadModule { }
