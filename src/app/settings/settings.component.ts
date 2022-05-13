import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz/quiz.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  answered: number;
  fails: number;
  totalScore: number = 0;

  constructor(
    private quizService: QuizService
  ) {
    this.answered = 0;
    this.fails = 0;
  }

  ngOnInit(): void {
    this.answered = this.quizService.getStorageData().length;
    this.fails = this.quizService.getFailedCount();
    this.setTotalScore();
  }

  setTotalScore() {
    this.quizService.getStorageData().forEach(element => {
      this.totalScore += element.score;
    });
  }
}
