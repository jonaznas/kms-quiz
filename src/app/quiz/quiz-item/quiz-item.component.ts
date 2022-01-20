import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizDto } from 'src/app/quiz/quiz-dto';
import { QuestionDto } from 'src/app/quiz/question-dto';

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
    private route: ActivatedRoute
  ) {
    this.quiz = this.route.snapshot.data.quiz;
    this.currentQuestion = 0;
    this.progress = 0;
  }

  ngOnInit(): void {
    this.questions = this.quiz.questions;
    this.updateProgress();
  }

  nextQuestion() {
    this.currentQuestion++;
    this.updateProgress();
  }

  updateProgress() {
    this.progress = (this.currentQuestion / this.questions.length) * 100;
  }
}
