import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProblemTitleService } from 'src/app/services/problem-title.service';
import { SolutionService } from 'src/app/services/solution.service';

@Component({
  selector: 'solution-card-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './solution-card.component.html',
  styleUrls: ['./solution-card.component.css']
})
export class SolutionCardComponent implements OnInit, OnDestroy {
  private readonly _subscription = new Subscription();

  solution: number;
  problemTitle: string;
  isComputing: boolean = false;

  _startTime: number;
  _endTime: number;
  _numberOfSecondsUsedForLastComputation: number;

  @Input()
  problemId: number;

  constructor(
    private readonly _solutionService: SolutionService,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _problemTitleService: ProblemTitleService) {
  }

  ngOnInit(): void {
    this.problemTitle = this._problemTitleService.getProblemTitleById(this.problemId);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  onCompute(): void {
    this.solution = null;
    this.isComputing = true;
    this._startTime = performance.now();
    this._changeDetectorRef.detectChanges();

    this._subscription.add(
      this._solutionService.getSolutionById(this.problemId).subscribe(
        solution => {
          this.solution = solution;
          this._endTime = performance.now();
          this._numberOfSecondsUsedForLastComputation = Math.round(this._endTime - this._startTime) / 1000;
          this.isComputing = false;
          this._changeDetectorRef.detectChanges();
        }
      )
    )
  }
}