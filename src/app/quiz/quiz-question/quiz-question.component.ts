import { Component, Input, OnInit } from '@angular/core';
import { QuestionDto } from 'src/app/quiz/question-dto';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input() question: QuestionDto;

  constructor() { }

  ngOnInit(): void {
    console.log(this.question);
  }

}
