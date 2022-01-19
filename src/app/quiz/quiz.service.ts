import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizDto } from 'src/app/quiz/quiz-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient
  ) {
  }

  getQuiz(id: number): Observable<QuizDto> {
    return this.http.get<QuizDto>(`/assets/quiz/quiz-${ id }.json`);
  }
}
