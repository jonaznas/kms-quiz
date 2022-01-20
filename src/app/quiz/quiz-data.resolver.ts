import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { QuizService } from 'src/app/quiz/quiz.service';
import { QuizDto } from 'src/app/quiz/quiz-dto';

@Injectable({
  providedIn: 'root'
})
export class QuizDataResolver implements Resolve<QuizDto[]> {
  constructor(
    private quizService: QuizService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<QuizDto[]> {
    return this.quizService.requestQuizData();
  }
}
