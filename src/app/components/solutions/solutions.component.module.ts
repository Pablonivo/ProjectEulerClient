import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { SolutionCardModule } from '../solution-card/solution-card-component.module';
import { SolutionsComponent } from './solutions.component';

@NgModule({
  declarations: [
    SolutionsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    SolutionCardModule
  ]
})
export class SolutionsComponentModule { }
