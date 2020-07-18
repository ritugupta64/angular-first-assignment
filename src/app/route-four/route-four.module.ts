import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { RouteFourRoutingModule } from './route-four-routing.module';
import { RouteFourComponent } from './route-four.component';
import { OneComponent } from './comp-one/comp-one.component';
import { TwoComponent } from './comp-two/comp-two.component';
import { ThreeComponent } from './comp-three/comp-three.component';
import { FourComponent } from './comp-four/comp-four.component';
import {CommonModuleModule} from '../common-module/common-module.module'


@NgModule({
  declarations: [RouteFourComponent, OneComponent, TwoComponent, ThreeComponent, FourComponent],
  imports: [
    CommonModule,
    RouteFourRoutingModule,
    FormsModule,
    CommonModuleModule
  ]
})
export class RouteFourModule { }
