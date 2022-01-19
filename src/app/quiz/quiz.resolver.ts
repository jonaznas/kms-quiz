import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { QuizService } from 'src/app/quiz/quiz.service';
import { QuizDto } from 'src/app/quiz/quiz-dto';

@Injectable({
  providedIn: 'root'
})
export class QuizResolver implements Resolve<QuizDto> {
  constructor(
    private quizService: QuizService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<QuizDto> {
    return this.quizService.getQuiz(route.params.id);
  }
}
