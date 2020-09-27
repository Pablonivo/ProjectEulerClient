import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SolutionService {

  constructor(private _http: HttpClient) { }

  getSolutionById(problemId: number): Observable<number>{
    var url = `https://project-euler-api.herokuapp.com/api/solution?solutionId=${problemId}`;
    return this._http.get<number>(url);
  }
}