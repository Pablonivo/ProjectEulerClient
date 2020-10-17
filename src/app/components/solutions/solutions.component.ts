import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SolutionCardComponent } from '../solution-card/solution-card.component';

@Component({
    selector: 'solutions-component',
    templateUrl: './solutions.component.html',
    styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit{
    private readonly NUMBER_OF_CONSECUTIVE_PROBLEMS_WHICH_ARE_SOLVED = 33;
    private readonly otherProblemIdsSolved = [67]

    problemIds: number[] = Array.from({ length: this.NUMBER_OF_CONSECUTIVE_PROBLEMS_WHICH_ARE_SOLVED }, (_, i) => i + 1).concat(this.otherProblemIdsSolved);
    breakpoint: number;

    @ViewChildren('solutioncard') components:QueryList<SolutionCardComponent>;

    ngOnInit() {
        this.breakpoint = this._numberOfColumnsThatCanBeShown(window.innerWidth);
    }

    onResize(event) {
        this.breakpoint = this._numberOfColumnsThatCanBeShown(event.target.innerWidth);
    }

    computeAll() {
        this.components.forEach(solutionCardComponent => solutionCardComponent.onCompute());
    }

    private _numberOfColumnsThatCanBeShown(windowWidth: number): number {
        const widthRequiredForColumn = 150;
        return Math.floor(windowWidth / widthRequiredForColumn)
    }
}