import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizDto } from 'src/app/quiz/quiz-dto';
import { Observable, of } from 'rxjs';
import { QuestionAnsweredDto } from 'src/app/quiz/question-answered-dto';
import { QuestionDto } from 'src/app/quiz/question-dto';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(
    private http: HttpClient
  ) {
  }

  requestQuizData(): Observable<QuizDto[]> {
    return this.http.get<QuizDto[]>(`/assets/quiz-data.json`);
  }

  getQuiz(id: number, quizData: QuizDto[]): Observable<QuizDto> {
    const quiz = quizData.find(q => q.id == id);
    if (quiz) {
      return of(quiz);
    } else {
      throw new Error('Quiz not found');
    }
  }

  addAnswerToStorage(quiz: QuizDto, question: QuestionDto) {
    const storageData = this.getStorageData();
    const questionAnswered: QuestionAnsweredDto = {
      quizId: quiz.id,
      questionId: question.id
    };

    const existingAnsweredQuestion = storageData.find(s => s.questionId === question.id && s.quizId === quiz.id);

    if (!existingAnsweredQuestion) {
      storageData.push(questionAnswered);
      localStorage.setItem('answers', JSON.stringify(storageData));
    }
  }

  getStorageData(): QuestionAnsweredDto[] {
    const answers = localStorage.getItem('answers');

    if (answers) {
      return JSON.parse(answers);
    } else {
      return [];
    }
  }

  deleteStorageData(): void {
    localStorage.removeItem('answers');
  }
}
