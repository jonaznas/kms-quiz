import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizDto } from 'src/app/quiz/quiz-dto';
import { Observable, of } from 'rxjs';
import { QuestionAnsweredDto } from 'src/app/quiz/question-answered-dto';
import { QuestionDto } from 'src/app/quiz/question-dto';
import { environment } from 'src/environments/environment';
import { addSeconds } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(
    private http: HttpClient
  ) {
  }

  requestQuizData(): Observable<QuizDto[]> {
    return this.http.get<QuizDto[]>(environment.apiUrl);
  }

  getQuiz(id: number, quizData: QuizDto[]): Observable<QuizDto> {
    const quiz = quizData.find(q => q.id == id);
    if (quiz) {
      return of(quiz);
    } else {
      throw new Error('Quiz not found');
    }
  }

  addAnswerToStorage(quiz: QuizDto, question: QuestionDto, score: number, fails: number): void {
    const storageData = this.getStorageData();
    const questionAnswered: QuestionAnsweredDto = {
      quizId: quiz.id,
      questionId: question.id,
      score: score,
      fails: fails
    };

    const existingAnsweredQuestion = storageData.find(s => s.questionId === question.id && s.quizId === quiz.id);

    if (!existingAnsweredQuestion) {
      storageData.push(questionAnswered);
      localStorage.setItem('answers', JSON.stringify(storageData));
    }
  }

  addFailCount() {
    const failCount = this.getFailedCount();

    localStorage.setItem('fails', JSON.stringify(failCount + 1));
  }

  getFailedCount(): number {
    const count = localStorage.getItem('fails');

    if (count) {
      return parseInt(count);
    } else {
      return 0;
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
    localStorage.removeItem('fails');
  }

  calculateSingleScore(startTime: number, answeredTime: number, fails: number): number {
    const timeLimit = addSeconds(startTime, 45).getTime();
    const timeScore = 100 * (1 - (answeredTime - startTime) / (timeLimit - startTime));
    const totalScore = Math.round(timeScore / (1 + fails));

    if(totalScore < 0) {
      return 0;
    } else {
      return totalScore;
    }
  }
}
