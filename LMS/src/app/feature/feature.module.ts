import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { QuizListComponent } from './component/quiz-list/quiz-list.component';
import { QuizComponent } from './component/quiz/quiz.component';

@NgModule({
  declarations: [DashboardComponent, QuizListComponent, QuizComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
