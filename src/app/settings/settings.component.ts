import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  answered: number;
  fails: number;

  constructor(
    private quizService: QuizService,
    private router: Router
  ) {
    this.answered = 0;
    this.fails = 0;
  }

  ngOnInit(): void {
    this.answered = this.quizService.getStorageData().length;
    this.fails = this.quizService.getFailedCount();
  }
}
