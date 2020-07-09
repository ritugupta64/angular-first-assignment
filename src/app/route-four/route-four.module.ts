import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteFourRoutingModule } from './route-four-routing.module';
import { RouteFourComponent } from './route-four.component';


@NgModule({
  declarations: [RouteFourComponent],
  imports: [
    CommonModule,
    RouteFourRoutingModule
  ]
})
export class RouteFourModule { }
