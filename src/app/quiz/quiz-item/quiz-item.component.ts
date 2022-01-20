import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizDto } from 'src/app/quiz/quiz-dto';
import { QuestionDto } from 'src/app/quiz/question-dto';
import { QuizService } from 'src/app/quiz/quiz.service';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss']
})
export class QuizItemComponent implements OnInit {
  quiz: QuizDto;
  questions: QuestionDto[];
  currentQuestion: number;
  progress: number;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {
    this.quiz = this.route.snapshot.data.quiz;
    this.currentQuestion = 0;
    this.progress = 0;
    this.questions = this.quiz.questions;
  }

  ngOnInit(): void {
    this.nextQuestion();
  }

  nextQuestion() {
    const quizData = this.quizService.getStorageData();

    this.questions = this.questions.filter(question => {
      return !quizData.find(data => data.questionId === question.id);
    });

    this.updateProgress();
  }

  updateProgress() {
    this.currentQuestion = this.quiz.questions.length - this.questions.length;
    this.progress = (this.currentQuestion / this.quiz.questions.length) * 100;
  }
}
