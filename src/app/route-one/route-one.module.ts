import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteOneRoutingModule } from './route-one-routing.module';
import { RouteOneComponent } from './route-one.component';
import {CommonModuleModule} from '../common-module/common-module.module'


@NgModule({
  declarations: [RouteOneComponent],
  imports: [
    CommonModule,
    RouteOneRoutingModule,
    CommonModuleModule
  ]
})
export class RouteOneModule { }
