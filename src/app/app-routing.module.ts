import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from 'src/app/overview/overview.component';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { QuizResolver } from 'src/app/quiz/quiz.resolver';
import { QuizItemComponent } from 'src/app/quiz/quiz-item/quiz-item.component';
import { SettingsComponent } from 'src/app/settings/settings.component';

const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'quiz/:id',
    component: QuizItemComponent,
    resolve: {
      quiz: QuizResolver
    }
  }
];

const topRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    path: '',
    component: LayoutComponent,
    children: routes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(topRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
