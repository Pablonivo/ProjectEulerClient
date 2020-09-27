import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'solutions-component',
    templateUrl: './solutions.component.html'
})
export class SolutionsComponent implements OnInit{
    private readonly NUMBER_OF_PROBLEMS_WHICH_ARE_SOLVED = 10;

    problemIds: number[] = Array.from({ length: this.NUMBER_OF_PROBLEMS_WHICH_ARE_SOLVED }, (_, i) => i + 1)
    breakpoint: number;

    ngOnInit() {
        this.breakpoint = this._numberOfColumnsThatCanBeShown(window.innerWidth);
    }

    onResize(event) {
        this.breakpoint = this._numberOfColumnsThatCanBeShown(event.target.innerWidth);
    }

    private _numberOfColumnsThatCanBeShown(windowWidth: number): number {
        const widthRequiredForColumn = 200;
        return Math.floor(windowWidth / widthRequiredForColumn)
    }
}