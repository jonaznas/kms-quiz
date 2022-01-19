import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    QuizItemComponent,
    QuizQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class QuizModule {
}
