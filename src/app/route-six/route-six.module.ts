import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteSixRoutingModule } from './route-six-routing.module';
import { RouteSixComponent } from './route-six.component';
import {CommonModuleModule} from '../common-module/common-module.module'


@NgModule({
  declarations: [RouteSixComponent],
  imports: [
    CommonModule,
    RouteSixRoutingModule,
    CommonModuleModule
  ]
})
export class RouteSixModule { }
