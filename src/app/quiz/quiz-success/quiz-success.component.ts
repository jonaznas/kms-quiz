import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-success',
  templateUrl: './quiz-success.component.html',
  styleUrls: ['./quiz-success.component.scss']
})
export class QuizSuccessComponent implements OnInit {

  @Input() score: number;

  constructor() { }

  ngOnInit(): void {
  }

}
