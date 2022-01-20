import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz/quiz.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
  }

  deleteAllData(): void {
    this.quizService.deleteStorageData();
  }
}
