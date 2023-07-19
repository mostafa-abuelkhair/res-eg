import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    SolutionsComponent
  ],
  imports: [
    CommonModule,
    SolutionsRoutingModule,
    SharedModule
  ]
})
export class SolutionsModule { }
