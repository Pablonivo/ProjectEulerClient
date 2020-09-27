import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SolutionCardModule } from '../solution-card/solution-card-component.module';
import { SolutionsComponent } from './solutions.component';

@NgModule({
  declarations: [
    SolutionsComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    SolutionCardModule
  ]
})
export class SolutionsComponentModule { }
