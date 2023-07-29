import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionRoutingModule } from './accordion-routing.module';
import { PoAccordionModule } from '@po-ui/ng-components';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    PoAccordionModule,
    PoModule,
  ]
})
export class AccordionModule { }
