import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [HeadingComponent, CardsComponent],
  imports: [
    CommonModule
  ],
  exports: [HeadingComponent, CardsComponent]
})
export class CommonModuleModule { }
