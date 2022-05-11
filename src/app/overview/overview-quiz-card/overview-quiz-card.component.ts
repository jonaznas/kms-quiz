import { Component, Input, OnInit } from '@angular/core';
import { QuizDto } from 'src/app/quiz/quiz-dto';
import { QuizService } from 'src/app/quiz/quiz.service';

@Component({
  selector: 'app-overview-quiz-card',
  templateUrl: './overview-quiz-card.component.html',
  styleUrls: ['./overview-quiz-card.component.scss']
})
export class OverviewQuizCardComponent implements OnInit {
  progress: number;
  answeredQuestions: number;
  totalScore: number = 0;
  totalFails: number = 1;

  @Input() quiz: QuizDto;

  constructor(
    private quizService: QuizService
  ) {
    this.progress = 0;
  }

  ngOnInit(): void {
    const quizData = this.quizService.getStorageData();
    const answeredQuestions = quizData.filter(q => q.quizId === this.quiz.id);

    this.answeredQuestions = answeredQuestions.length;
    this.updateProgress();

    quizData.filter(q => q.quizId === this.quiz.id).forEach(q => {
      if(q.score) {
        this.totalScore = this.totalScore + q.score
      }
    });

    this.totalScore = this.totalScore / this.answeredQuestions;
  }

  updateProgress() {
    this.progress = (this.answeredQuestions / this.quiz.questions.length) * 100;
  }
}
