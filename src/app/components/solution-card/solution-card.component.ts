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

  @Input()
  problemId: number;

  constructor(
      private readonly _solutionService: SolutionService,
      private readonly _changeDetectorRef: ChangeDetectorRef,
      private readonly _problemTitleService: ProblemTitleService){
  }

  ngOnInit(): void {
    this.problemTitle = this._problemTitleService.getProblemTitleById(this.problemId);
  }
  
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  onCompute(): void {
    this.isComputing = true;
    this._changeDetectorRef.detectChanges();

    this._subscription.add(
      this._solutionService.getSolutionById(this.problemId).subscribe(
        solution => {
          this.solution = solution;
          this.isComputing = false;
          this._changeDetectorRef.detectChanges();
        }
      )
    )
  }
}