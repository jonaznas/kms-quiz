import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { OverviewQuizCardComponent } from './overview-quiz-card/overview-quiz-card.component';


@NgModule({
  declarations: [
    OverviewComponent,
    OverviewQuizCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OverviewModule {
}
