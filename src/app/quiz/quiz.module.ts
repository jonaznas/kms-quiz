import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { RouterModule } from '@angular/router';
import { IconModule } from 'src/app/layout/icons/icon.module';
import { QuizSuccessComponent } from './quiz-success/quiz-success.component';


@NgModule({
  declarations: [
    QuizItemComponent,
    QuizQuestionComponent,
    QuizSuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule
  ]
})
export class QuizModule {
}
