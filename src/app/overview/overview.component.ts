import { Component, OnInit } from '@angular/core';
import { QuizDto } from 'src/app/quiz/quiz-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  quizzes: QuizDto[];

  constructor(
    private route: ActivatedRoute
  ) {
    this.quizzes = [];
  }

  ngOnInit(): void {
    this.quizzes = this.route.parent?.snapshot.data.quizData;
  }
}
