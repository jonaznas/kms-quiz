import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-delete-data-confirm',
  templateUrl: './settings-delete-data-confirm.component.html',
  styleUrls: ['./settings-delete-data-confirm.component.scss']
})
export class SettingsDeleteDataConfirmComponent implements OnInit {

  constructor(
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  async deleteAllData() {
    this.quizService.deleteStorageData();
    await this.router.navigate(['/results']);
  }
}
