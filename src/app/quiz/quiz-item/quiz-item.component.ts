import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizDto } from 'src/app/quiz/quiz-dto';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss']
})
export class QuizItemComponent implements OnInit {
  quiz: QuizDto;

  constructor(
    private route: ActivatedRoute
  ) {
    this.quiz = this.route.snapshot.data.quiz;
  }

  ngOnInit(): void {
  }
}
