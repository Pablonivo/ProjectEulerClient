import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProblemTitleService } from 'src/app/services/problem-title.service';
import { SolutionCardComponent } from './solution-card.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatProgressSpinnerModule
    ],
    exports: [SolutionCardComponent],
    declarations: [SolutionCardComponent],
    providers: [ProblemTitleService]
})

export class SolutionCardModule {
}